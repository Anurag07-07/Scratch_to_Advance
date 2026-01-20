import {motion} from 'framer-motion'
import { useState } from 'react'
const FlipCard = () => {
  const [isFlipped,SetisFlipped] = useState<boolean>(false)
  return (
    <motion.div onClick={()=>SetisFlipped(!isFlipped)} variants={
      {
        front:{rotateY:0},
        back:{rotateY:180}
      }
    } initial='front' animate={isFlipped ? 'front': 'back'} transition={{duration:0.6}}  className=" bg-white w-44 h-32 flex justify-center items-center rounded-2xl">FlipCard</motion.div>
  )
}

export default FlipCard