import React, { useReducer } from 'react'

const Reducer = () => {

  const intialState = {
    count:0
  }

  const reducer = (state,action)=>{
      switch (action.type) {
        case "increment":
          return {...state,count:state.count+1}
        case "decrement":
          return {...state,count:state.count-1}
        case "reset":
          return {...state,count:0}
        default:
          return state
      }
    }


  const [state,dispatch] = useReducer(reducer,intialState);

  return (
    <div>
      <div>{state.count}</div> 
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>     
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>     
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>     
    </div>
  )
}

export default Reducer