import { useReducer, useState } from 'react'
import { IntitialState, reducer } from './FuctionReducer'
const ReducerPractice = () => {
  const [state,dispatch] = useReducer(reducer,IntitialState)
  const [value,setValue] = useState(0)
  return (
    <div>
      <h1>Count {state.count}</h1>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      <div>
       <input placeholder='Enter The Amount' value={value} onChange={(e)=>setValue(e.target.value)}  ></input>
       <button onClick={()=>dispatch({type:"increasebyamount",payload:Number(value)})}>Increment With Amount</button>
       <button onClick={()=>dispatch({type:"decreasebyamount",payload:Number(value)})}>Increment With Amount</button>
      </div>
    </div>
  )
}

export default ReducerPractice