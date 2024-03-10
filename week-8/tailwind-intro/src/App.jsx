import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='flex justify-between'>
        <div style={{backgroundColor: "red"}}>Hello</div>
        <div style={{backgroundColor: "green"}}>Hello</div>
        <div style={{backgroundColor: "cyan"}}>Hello</div>
        <div style={{backgroundColor: "grey"}}>Hello</div>
      </main>
    </>
  )
}

export default App
