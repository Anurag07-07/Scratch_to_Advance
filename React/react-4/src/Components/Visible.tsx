// import {motion} from 'framer-motion'
// import { useState } from 'react'
// const Visible = () => {
//   const [isVisible,setIsVisible] = useState<boolean>(true)
//   return (
//     <motion.div
//      className=' w-44 h-44 bg-yellow-300'
//     variants={{
//       hidden:{opacity:0,scale:0.8},
//       visible:{opacity:1,scale:1},
//       exit:{opacity:0,scale:0.5}
//     }}

import { useState } from "react"

    
//     initial={'hidden'}
//     animate={isVisible ? 'visible' : 'hidden'}
//     transition={{duration:2,ease:"easeInOut"}}
//     exit={'exit'}
//     onClick={()=>setIsVisible(!isVisible)}
//     >
//     </motion.div>
//   )
// }

// export default Visible

import {motion} from 'framer-motion'

const Visible = () => {
  const [isVisible,setVisible] = useState<boolean>(false)
  return (
    <motion.div
    className=" w-44 h-44 bg-teal-400 rounded-full"
    variants={{
      hidden:{opacity:0,scale:1},
      visible:{opacity:1,scale:1.5},
      exit:{opacity:0,scale:0.8}
    }}

    initial={'hidden'}
    animate={isVisible ? 'visible':"hidden"}
    exit={'exit'}
    transition={{duration:2,ease:"easeInOut"}}
    onClick={()=>setVisible((prev)=>!prev)}
    >

    </motion.div>
  )
}

export default Visible