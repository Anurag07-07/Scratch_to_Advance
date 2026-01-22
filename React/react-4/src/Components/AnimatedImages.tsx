import React, { useState } from 'react'

import carl from '../assets/Carl_480x640.jpg'
import chantel from '../assets/ChantalG_480x640.jpg'
import joel from '../assets/joel_480X640_3.jpg'
import meggie from '../assets/MEGGIE_480X640_2.jpg'
import mel from '../assets/MEL_480X640.jpg'


import {motion} from 'framer-motion'

const parentVarients = {
  hidden:{opacity:0},
  visible:{
    opacity:1,
    transition:{
      staggerChildren:0.5,
      staggerDirection:1
    }
  }
}

const childrenVarients = {
  hidden:{opacity:0,y:30},
  visible:{opacity:1,y:0}
}


const AnimatedImages = () => {

  const imageArray = [
    carl,chantel,joel,meggie,mel
  ]

  const [visible,setVisible] = useState<boolean>(false)

  return (
    <div>

    <button className=' w-36 bg-amber-400 rounded-md py-2 ' onClick={()=>setVisible((prev)=>!prev)}>
      {visible ? "Hide Image" : "Show Images"}
    </button>
    <motion.div variants={parentVarients} initial='hidden' animate={visible ? 'visible' : 'hidden' }  className=' flex flex-col gap-y-3'>
    <div className=' flex gap-x-2'>
      {
        imageArray.map((image,index)=>(
          <motion.img variants={childrenVarients} src={image} className=' w-36' alt={`This is ${index} image`}></motion.img>
        ))
      }   
    </div>
  </motion.div>
  </div>
  )
}

export default AnimatedImages