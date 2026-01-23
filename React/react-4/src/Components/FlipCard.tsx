// import {motion} from 'framer-motion'
// import { useState } from 'react'
// const FlipCard = () => {
//   const [isFlipped,SetisFlipped] = useState<boolean>(false)
//   return (
//     <motion.div onClick={()=>SetisFlipped(!isFlipped)} variants={
//       {
//         front:{rotateY:0},
//         back:{rotateY:180}
//       }
//     } initial='front' animate={isFlipped ? 'front': 'back'} transition={{duration:0.6}}  className=" bg-white w-44 h-32 flex justify-center items-center rounded-2xl">FlipCard</motion.div>
//   )
// }

// export default FlipCard

import {motion} from 'framer-motion'
import { useState } from 'react'

export const FlipCard = () => {

  const [flip,setFlip] = useState<boolean>(false)

  return (
    <motion.div
    animate={{
      rotateY:flip ? 0 : 180,
      rotateX:flip ? 0 : 180
    }}
    transition={{duration:2,ease:"easeInOut"}}
    onClick={()=>setFlip((prev)=>!prev)} className=" flex justify-center items-center text-2xl  bg-orange-300 w-56 h-32 rounded-md border-2 shadow-2xl shadow-white">
      {flip ? "Hello" : "Hello"}
    </motion.div>
  )
}
