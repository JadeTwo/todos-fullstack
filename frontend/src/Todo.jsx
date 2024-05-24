import { useState, useRef, useEffect } from 'react'
import axios from "axios"
import './App.css'
import bearsStore from "./store/bearStore"
console.log(import.meta.env)

const BASE_URL = import.meta.env.DEV ? 
'http://localhost:8080/api/todos' : 
'https://todos-backend-ybjq.onrender.com/api/todos'


const Todo = ({userAuth}) => {
   let bear= bearsStore((state)=>state)
    console.log("🚀 ~ Todo ~ bear:", bear)
    const [isLoading, setIsLoading] = useState(false)
    const [todos, setTodos] = useState([])
  
    useEffect(() => {
      async function getTodos() {
        try {
          setIsLoading(true)
          const data = await axios.get(BASE_URL+"/")
          console.log(data.data)
          setTodos(data.data)  
        } catch(err) {
          console.log(err)
        } finally {
          setIsLoading(false)
        }
      }
      if(userAuth){

          getTodos()
        }
    }, [userAuth])
  
    const textRef = useRef()
    const completeRef = useRef()
  
    async function handleSubmit(e) {
      e.preventDefault()
      const body = {
        text: textRef.current.value,
        completed: completeRef.current.checked,
        userId: userAuth.uid//useId of the user 
      }
      console.log(body)
      
      try {
        setIsLoading(true)
        
        const newTodo = await axios.post(BASE_URL,body)
        console.log("🚀 ~ handleSubmit ~ newTodo:", newTodo)
        setTodos([...todos,newTodo.data])
        textRef.current.value = ''
        completeRef.current.checked = false
      } catch(err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
  
    async function handleDelete(id) {
      try {
        setIsLoading(true)
   
        const data = await axios.delete(`${BASE_URL}/${id}`)
        setTodos(todos.filter(todo => todo._id !== id))
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    return (
        <div>
            {bear.bears}
        <button onClick={()=>bear.increasePopulation()}>increase</button>

                <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          I want to:
          <br />
          <input type="text" ref={textRef} />
        </label>
        <label>
          <input type="checkbox" ref={completeRef} />
        </label>
        <br/><br/>
        <button>Add Todo</button>
      </form>
      <br/><br/>
        {
          isLoading ?
            <p>Loading...</p>
            :
          todos.map((todo) => 
              <p 
                style={{ textDecoration: todo.completed ? 'line-through' : '' }} 
                key={todo._id}>
                  {todo.text} 
                  <span 
                    onClick={() => handleDelete(todo._id)} 
                    style={{ marginLeft: '15px', fontWeight: '500', cursor: 'pointer' }}>
                      X
                  </span>
              </p>
          )
        }
        </div>
    );
}

export default Todo;
