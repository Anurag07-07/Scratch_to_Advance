// import Button from "./Components/Basics/Button"
// // import User from "./Components/User"

import Todo from "./Components/Basics/Todo"
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
      <Todo></Todo>
    </div>
  )
}

export default App