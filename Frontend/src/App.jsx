import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/todo'
function App() {
  const [count, setCount] = useState(0) 

  return (
    <div>
       <CreateTodo/>
       <Todos/>
    </div>
  )
}

export default App 
