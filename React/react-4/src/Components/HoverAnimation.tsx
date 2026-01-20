import {motion} from 'framer-motion'
const HoverAnimation = () => {
  return (
    <motion.div whileHover={{scale:1.2,rotate:50}} transition={{type:"spring",stiffness:300}} className=" w-72 h-72 flex justify-center items-center bg-teal-300 shadow-2xl shadow-white">HoverAnimation</motion.div>
  )
}

export default HoverAnimation