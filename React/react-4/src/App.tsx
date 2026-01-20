// import BouncingLoader from "./Components/BouncingLoader"
import FlipCard from "./Components/FlipCard"
import HoverAnimation from "./Components/HoverAnimation"
// import Visible from "./Components/Visible"
const App = () => {
  return (
    <div className=" w-screen h-screen bg-black flex justify-center items-center">
    {/* <motion.div className=" w-[100px] h-[100px] bg-yellow-400 "  initial={{x:0,y:0,scale:1,rotate:"0deg"}}  animate={{x:"39rem",y:"39rem",rotate:"120deg",scale:2,borderRadius:"50px"}} transition={{delay:2,duration:5,ease:"easeInOut"}}>
    </motion.div> */}
    {/* <Button></Button> */}
    {/* <BouncingLoader></BouncingLoader> */}
    {/* <Visible></Visible> */}
    {/* <FlipCard></FlipCard> */}
    <HoverAnimation></HoverAnimation>
    </div>
  )
}

export default App