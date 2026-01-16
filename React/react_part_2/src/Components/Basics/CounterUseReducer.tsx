import { useReducer } from "react"

const CounterUseReducer = () => {

  type Action = {type:'INCREMENT'} | {type:'DECREMENT'}
  type State = {count:number}

  const reducer = (state:State,action:Action):State=>{
    switch (action.type) {
      case "INCREMENT":
        return {...state,count:state.count+1}        
    
      case "DECREMENT":
        return {...state,count:state.count+1}        
      
        default:
        return state
    }
  }

  const [state,dispatch] = useReducer(reducer,{count:0})

  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
    </div>
  )
}

export default CounterUseReducer