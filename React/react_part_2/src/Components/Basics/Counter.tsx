import { useContext } from "react"
import { ContextProvider } from "./CreateContext"

const Counter = () => {
  const {count,increment,decrement} = useContext(ContextProvider)
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter