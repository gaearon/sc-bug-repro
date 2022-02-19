import { useState } from 'react'

export default function Stuff() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>blabla {count}</button>
}