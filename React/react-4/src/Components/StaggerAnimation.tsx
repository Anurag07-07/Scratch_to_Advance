import {motion} from 'framer-motion'
const parentVarients = {
  hidden:{opacity:0},
  visible:{
    opacity:1,
    transition:{
      staggerChildren:0.8
    }
  }
}

const childrenVarients = {
  hidden:{
    opacity:0,
    y:20
  },
  visible:{opacity:1,y:0}
}

const StaggerAnimation = () => {
  return (
    <motion.div className=" flex flex-col gap-y-2" variants={parentVarients} initial='hidden' animate='visible'  >
      {
        [...Array(5)].map((_,index)=>(
          <motion.div key={index} className=" w-32 h-32 bg-amber-300 rounded-full" variants={childrenVarients} ></motion.div>
        ))
      }
    </motion.div>
  )
}

export default StaggerAnimation