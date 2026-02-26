// import { decrement, increment } from "./store/CounterSlice"
// import { useDispatchTS, useSelectorTS } from "./store/Hook"

// const App = () => {

//   const {value} = useSelectorTS(state=>state.counter)
//   const dispatch = useDispatchTS()
//   return (
//     <div>
//       <h1>
//         {value}
//       </h1>
//       <button onClick={()=>dispatch(increment())}>Increment</button>
//       <button onClick={()=>dispatch(decrement())}>Decrement</button>
//     </div>
//   )
// }

// export default App

import Allproducts from './Components/Allproducts'

const App = () => {
  return (
    <div>
      <Allproducts></Allproducts>
    </div>
  )
}

export default App