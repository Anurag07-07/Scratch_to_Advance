import {motion} from 'framer-motion'

const BounceVarients = {
  initial:{x:-200,y:-200},
  movement:{x:200,y:[-200,200,-200,200,-200,200,-200]}
}

const BouncingBall = () => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
      <motion.div variants={BounceVarients} initial='initial' animate='movement' transition={{duration:10,ease:"easeInOut"}}  className=' w-32 h-32 rounded-full bg-yellow-400'></motion.div>
    </div>
  )
}

export default BouncingBall