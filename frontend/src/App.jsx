import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {

    async function getData() {
      try {
        const response = await fetch('http://localhost:8080/todos')
        const data = await response.json()
        console.log(data) 
        setTodos(todos)
      } catch (e) {
        console.log(e)
      }
    }

    getData()

  }, [])

  console.log(todos)
 
  return (
    <>
      Hello (from frontend)
    </>
  )
}

export default App
