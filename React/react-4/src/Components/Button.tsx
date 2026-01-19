import {motion} from 'framer-motion'
const Button = () => {
  return (
    <motion.div className=' bg-blue-600 w-44 flex justify-center items-center px-1 py-5 border-2 border-white rounded-2xl text-xl'
    animate={{
      scale:[1,1.1,1]
    }}
    transition={{
      duration:2,
      repeat:Infinity,
      ease:"easeInOut"
    }}
    >Button</motion.div>
  )
}

export default Button