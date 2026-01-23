import React, { useReducer } from 'react'

interface State{
  count:number
}

type Action = {type:'INCREMENT'} | {type:'DECREMENT'}


const CounterUseReducer = () => {

  const intialState = {
    count:0
  }


  const reducer = (state:State,action:Action)=>{
    switch (action.type) {
      case 'INCREMENT':
          return {...state,count:state.count+1}
      case 'DECREMENT':
          return {...state,count:state.count-1}
      default:
        return state
    }
  }


  const [state,dispatch] = useReducer(reducer,intialState)
  return (
    <div>
      <div>Count:{state.count}</div>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default CounterUseReducer