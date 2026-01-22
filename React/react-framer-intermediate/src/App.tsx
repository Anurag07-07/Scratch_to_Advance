import {motion, useMotionValue} from 'framer-motion'
import RangeSlider from './Components/RangeSlider'
const App = () => {
  const z = useMotionValue(500)

  return (
    // <div className=" flex justify-center items-center w-screen h-screen">
    //   <motion.div className=" bg-red-500 w-44 h-44 rounded-full "  style={{z}} ></motion.div>
    // </div>
    <>
      <RangeSlider></RangeSlider>
    </>
  )
}

export default App