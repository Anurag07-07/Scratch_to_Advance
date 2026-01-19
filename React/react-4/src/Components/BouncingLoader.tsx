import {motion} from 'framer-motion'
const BouncingLoader = () => {
  return (
    <div className=' flex justify-center items-center gap-x-3'>
      {
        [...Array(5)].map((_,index)=>(
          <motion.div key={index} className=' w-10 h-10  bg-teal-500 rounded-full'
          animate={{
            y:[0,-50,0]
          }}
          transition={{
            duration:2,
            repeat:Infinity,
            repeatDelay:index*0.2
          }}
          >
          </motion.div>
        ))
      }
    </div>
  )
}

export default BouncingLoader