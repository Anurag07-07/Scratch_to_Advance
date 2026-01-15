// import Button from "./Components/Basics/Button"
// // import User from "./Components/User"

import CounterUseReducer from "./Components/Basics/CounterUseReducer"

// import Counter from "./Components/Basics/Counter"
// import EventHandling from "./Components/Basics/EventHandling"
// import FocusInput from "./Components/Basics/FocusInput"
// import FormUseRef from "./Components/Basics/FormUseRef"
// import Todo from "./Components/Basics/Todo"
// import UseContext from "./Components/Basics/UseContext"
// import UserForm from "./Components/Basics/UserForm"
// import UserProfiler from "./Components/Basics/UserProfiler"

// import AdminInfo from "./Components/Basics/AdminInfo"
// import UserInfo from "./Components/Basics/UserInfo"

// function AlertCalling(){
//   alert("Button Clicked")
// }

const App = () => {
  return (
    <div>
      {/* <User name="Anurag" age={95} isStudent={true}>
        Hello There
      </User> */}
      {/* <Button label="Click Me" onClick={AlertCalling} disabled={false}></Button> */}
      {/* <UserInfo name="Anurag Paaji" age={95} email="anuragpaaji@hotmail.com"  ></UserInfo> */}
      {/* <AdminInfo name="Anurag" age={22} salary="$200k" companyname="Edunax" email="anurag07raj@gmail.com"></AdminInfo> */}
      {/* <UserProfiler></UserProfiler> */}
      {/* <Todo></Todo> */}
      {/* <FormUseRef></FormUseRef> */}
      {/* <FocusInput></FocusInput> */}
      {/* <UserForm></UserForm> */}
      {/* <EventHandling></EventHandling> */}
      {/* <Counter></Counter> */}
      <CounterUseReducer></CounterUseReducer>

    </div>
  )
}

export default App