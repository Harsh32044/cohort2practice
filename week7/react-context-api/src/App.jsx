import { useContext, useState } from 'react'
import { CountContext } from './Context'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
      <Count/>
      </CountContext.Provider>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext)
  return <span>{count}</span>
}

function Buttons() {
  const setCount = useContext(CountContext)
  return <div>
    <button className='circle-button' onClick={() => setCount(count + 1)}>+</button>
    <button className='circle-button' onClick={() => setCount(count - 1)}>-</button>
  </div>
}

export default App
