export const IntitialState = {
  count:0
}

export const reducer = (state,action)=>{
  switch (action.type) {
    case "increment":
        return {...state,count:state.count+1}
    case "decrement":
        return {...state,count:state.count-1}
    case "reset":
        return {...state,count:0}
    case "increasebyamount":
       return {...state,count:state.count+action.payload}
    case "decreasebyamount":
       return {...state,count:state.count-action.payload}
    default:
      state;
  }
}
