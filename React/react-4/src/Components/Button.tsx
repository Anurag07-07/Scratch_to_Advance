// import {motion} from 'framer-motion'
// const Button = () => {
//   return (
//     <motion.div className=' bg-blue-600 w-44 flex justify-center items-center px-1 py-5 border-2 border-white rounded-2xl text-xl'
//     animate={{
//       scale:[1,1.1,1]
//     }}
//     transition={{
//       duration:2,
//       repeat:Infinity,
//       ease:"easeInOut"
//     }}
//     >Button</motion.div>
//   )
// }

// export default Button

import {motion} from 'framer-motion'

const Button = () => {
  return (
    <motion.div animate={{
      scale:[1,1.5,1],
    }}  transition={{duration:1.3,repeat:Infinity,ease:"easeInOut"}}  className=" bg-cyan-400 px-3 py-2 rounded-md w-32 flex justify-center items-center border-2">Button</motion.div>
  )
}

export default Button