import {motion, useMotionValue} from 'framer-motion'
import RangeSlider from './Components/RangeSlider'
import UseTransformation from './Components/UseTransformation'
import WhileInViewProps from './Components/WhileInViewProps'
import UseScrollHook from './Components/UseScrollHook'
import MotionBox from './Components/Exercise/MotionBox'
import BouncingBall from './Components/Exercise/BouncingBall'
import RotationAnimation from './Components/Exercise/RotationAnimation'
import SkewedAnimation from './Components/Exercise/SkewedAnimation'
import Sequential from './Components/Exercise/Sequential'
const App = () => {
  const z = useMotionValue(500)

  return (
    // <div className=" flex justify-center items-center w-screen h-screen">
    //   <motion.div className=" bg-red-500 w-44 h-44 rounded-full "  style={{z}} ></motion.div>
    // </div>
    <div className=' flex justify-center items-center w-screen h-screen'>
      {/* <RangeSlider></RangeSlider> */}
      {/* <UseTransformation></UseTransformation> */}
      {/* <WhileInViewProps></WhileInViewProps> */}
      {/* <UseScrollHook></UseScrollHook> */}
      {/* <MotionBox></MotionBox> */}
      {/* <BouncingBall></BouncingBall> */}
      {/* <RotationAnimation></RotationAnimation> */}
      {/* <SkewedAnimation></SkewedAnimation> */}
      <Sequential></Sequential>
    </div>
  )
}

export default App