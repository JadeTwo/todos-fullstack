import { useEffect, useRef, useState } from 'react'
import './App.css'

const BASE_URL = 'http://localhost:8080'

function App() {

  const [todos, setTodos] = useState([])
  const inputRef = useRef()

  async function getData() {
    try {
      const response = await fetch(BASE_URL + '/todos')
      const data = await response.json()
      setTodos(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log('todos: ', todos)

  async function handleSubmit(e) {
    e.preventDefault()
    const todo = {
      text: inputRef.current.value
    }

    const response = await fetch(BASE_URL + '/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const newTodo = await response.json()

    console.log(newTodo)

    setTodos([...todos, newTodo])

    inputRef.current.value = ''
  }

  async function handleDelete(id) {
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: 'DELETE'
    })
    getData()
  }

  async function handleComplete(id) {
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: 'PUT'
    })
    getData()
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
          <li key={todo._id}>
            <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() => handleComplete(todo._id)}
            />
            {todo.text}
            <button onClick={() => handleDelete(todo._id)}>X</button>
          </li>
        )}
      </ul>
    </>
  )
}

export default App
