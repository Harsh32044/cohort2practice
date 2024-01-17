import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [selectedId, setSelectedId] = useState(1)

  return <div>
    <button onClick={() => setSelectedId(1)}>1</button>
    <button onClick={() => setSelectedId(2)}>2</button>
    <button onClick={() => setSelectedId(3)}>3</button>
    <button onClick={() => setSelectedId(4)}>4</button>
    <Todo id={selectedId}/>
  </div>
}

function Todo({id}) {

  const [todos, setTodos] = useState({})

  useEffect(() => {
    setTimeout(() => {
      axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(res => {
      setTodos(res.data.todo)
    })
    }, 5000)
    
  },[id])

  return <div>
    <h1>{todos.title}</h1>
    <h4>{todos.description}</h4>
  </div>
}

export default App
