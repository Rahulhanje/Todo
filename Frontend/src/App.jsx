import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/todo'
function App() {
  const [todos,settodo]=useState([]);
  
  return (
    <div>
       <CreateTodo/>
       <Todos todos={todos}/>
    </div>
  )
}

export default App 
