import { useMotionValue, useTransform } from 'framer-motion'
import {motion} from 'framer-motion'
const UseTransformation = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const backgroundColor = useTransform(x,[-100,100],["#ff0000","#00ff00"])

  return (
    <motion.div style={{x,y,backgroundColor}} drag dragConstraints={{
      top:-100,
      left:-100,
      right:100,
      bottom:100
    }} className=' bg-yellow-300 w-44 h-44 '>UseTransformation</motion.div>
  )
}

export default UseTransformation