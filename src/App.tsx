import { useEffect, useRef, useState } from 'react'
import './App.css'
// A Referesher Project to understand almost all the react hooks
function App() {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef(0);
  useEffect(() => {
    // call the useEffect with thecontext of button being incremented or decremented
    const previousCount = previousCountRef.current;
    const action = count > previousCount ? 'incremented' : count < previousCount ? 'decremented' : 'unchanged';
     console.log(`Button ${action}: count is now ${count}`);
    console.log('count', count)
    previousCountRef.current = count;
  }, [count]);

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <p>Count: {count}</p>
    </>
  )
}

export default App
