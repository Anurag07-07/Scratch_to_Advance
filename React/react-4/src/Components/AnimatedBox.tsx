import {motion} from 'framer-motion'

const boxVarients = {
  initial:{scale:1,rotate:0,skew:0},
  hover:{scale:1.2,rotate:10,skew:"10deg",transition:{duration:0.3}},
  tap:{scale:1.5,rotate:-10,transition:{duration:0.5}}
}

const AnimatedBox = () => {
  return (
    <motion.div variants={boxVarients} className=" w-56 h-56 bg-cyan-400 rounded-sm" initial="intial" whileHover={'hover'} whileTap={'tap'}>

    </motion.div>
  )
}

export default AnimatedBox