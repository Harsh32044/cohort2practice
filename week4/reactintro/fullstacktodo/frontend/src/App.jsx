import { useState } from 'react'
import { nanoid } from 'nanoid'
import Todo from './Todo'
import AddTodo from './AddTodo'

function App() {

  const [todos, setTodos] = useState([])
  return (
    <div>
      <AddTodo/>
      {
        todos.map(todo => {
          return <Todo key={nanoid()} id={nanoid()} title={todo.title} description={todo.description}
          todos={todos} setTodos={setTodos}/>
        })
      }
    </div>
  )
}

export default App
