import {motion} from 'framer-motion'

const RotationAnimation = () => {
  return (
    <div className="">
      <motion.div animate={{rotate:360}} transition={{duration:3,repeat:Infinity,ease:"linear"}}  className=" w-32 h-32 bg-red-300 flex justify-center items-center" >Rotate Animation</motion.div>
    </div>
  )
}

export default RotationAnimation