import {motion} from 'framer-motion'
const Sequential = () => {
  return (
    <div className=' flex gap-x-4'>
      {
        [...Array(5)].map((_,i)=>(
          <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:i*0.5}}  key={i} className=' w-14 h-14 bg-red-500 rounded-full '></motion.div>
        ))
      }
    </div>
  )
}

export default Sequential