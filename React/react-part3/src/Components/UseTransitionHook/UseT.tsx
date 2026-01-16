import { useState, useTransition } from "react"
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";

const UseT = () => {
  
  const [activeTab,setactiveTab] = useState<string>('home')

  const [isPending,setTransition] = useTransition()

  function TakeData(tab){
    setTransition(()=>{
      setactiveTab(tab)
    })
  }

  const renderContent = ()=>{
    switch (activeTab) {
      case 'home':
        return <Home></Home>        
    
      case 'about':
        return <About></About>        
    
      case 'posts':
        return <Posts></Posts>        
    
      default:
        return <Home></Home>
    }
  }

  return (
    <>
    <div className="tabs">
      <button onClick={()=>TakeData('home')} >Home</button>
      <button onClick={()=>TakeData('about')} >About</button>
      <button onClick={()=>TakeData('posts')} >Post</button>
    </div>
    <div>{isPending && <div>Loading...</div>}</div>
    <div className="content">
      {renderContent()}
    </div>
    </>
  )
}

export default UseT