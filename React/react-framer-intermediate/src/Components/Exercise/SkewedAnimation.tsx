import {motion} from 'framer-motion'
import { useState } from 'react'

const SkewedAnimation = () => {
  const [isSkewed,setSkewed] = useState<boolean>(true)
  return (
    <div className=' '>
      <motion.div
      onClick={()=>setSkewed(prev=>!prev)}
      animate={{
        skewX:isSkewed ? -20 : 0
      }}

      transition={{duration:2,ease:"easeInOut"}}
      className=' w-32 h-32 bg-teal-400 rounded-2xl border-4' ></motion.div>
    </div>
  )
}

export default SkewedAnimation