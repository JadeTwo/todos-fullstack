import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])
  const inputRef = useRef()

  useEffect(() => {

    async function getData() {
      try {
        const response = await fetch('http://localhost:8080/todos')
        const data = await response.json()
        console.log(data) 
        setTodos(data)
      } catch (e) {
        console.log(e)
      }
    }

    getData()

  }, [])

  console.log('todos: ', todos)

  async function handleSubmit(e) {
    e.preventDefault()
    const todo = {
      text: inputRef.current.value
    }
    
    const response = await fetch('http://localhost:8080/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const newTodo = await response.json()

    console.log(newTodo)

    setTodos([...todos, newTodo])

  }
 
  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
      <ul>
        {todos.map((todo) => 
          <li key={todo._id}>{todo.text}</li>
        )}
      </ul>
    </>
  )
}

export default App
