import { useState } from 'react'
import Todo from './Todo'
import { nanoid } from 'nanoid'
import AddTodo from './AddTodo'


function App() {

  const [todo, setTodo] = useState([
    {
      id:123,
      title: "Go to gym",
      description: "Go to gym from 7-9",
      completed: false
    },
    {
      id:456,
      title: "Study DSA",
      description: "Study DSA everyday",
      completed: true
    }
  ])



  return (
    <div>
      <AddTodo todo={todo} setTodo={setTodo} />
      {todo.map(item =>
        <Todo key={nanoid()} id={item.id} title={item.title} description={item.description}
          isDone={item.completed} todo={todo} setTodo={setTodo}/>
      )}
    </div>
  )

}

export default App
