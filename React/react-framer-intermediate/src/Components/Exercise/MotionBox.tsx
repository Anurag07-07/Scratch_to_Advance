import {motion} from 'framer-motion'
const MotionBox = () => {
  return (
    <div className=' flex justify-center items-center w-screen h-screen'>
      <motion.div className=' w-32 h-32 bg-yellow-300 rounded-2xl'
        initial={{x:-200,opacity:0}}
        animate={{
          opacity:1,
          x:200,
          scale:[1,1.15,1,1.25,1]
        }}
        transition={{
          duration:3,
          ease:"easeInOut",
          repeat:Infinity
        }}
      ></motion.div>
    </div>
  )
}

export default MotionBox