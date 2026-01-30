import { useCounters } from "./store"

const App = () => {
  // const count = useCounters(state=>state.count)
  const {count,increment,decrement} = useCounters() 
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App