import { useMemo, useState } from 'react'


function App() {
  const [counter, setCounter] = useState(0)
  const [inputVal, setInputVal] = useState(1)

  let count = useMemo(() => {
    let finalCount = 0
  for (let i = 1; i <= inputVal; i++) {
    finalCount = finalCount + i
  }
  return finalCount
  }, [inputVal])

  return <div>
    <input type="text" onChange={e => setInputVal(e.target.value)}
      placeholder='Find sum from 1 to n' />
      <br /><br />
      Sum from 1 to {inputVal} is {count}
      <br />
      <button onClick={() => setCounter(counter + 1)}>Counter ({counter})</button>

  </div>
}

export default App
