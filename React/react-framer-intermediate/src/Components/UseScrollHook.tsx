import { useScroll, useTransform } from "framer-motion"
import {motion} from 'framer-motion'

const UseScrollHook = () => {
  const {scrollY} = useScroll()
  const scale = useTransform(scrollY,[0,300],[1,1.5])
  const opacity = useTransform(scrollY,[0,300],[1,0])
  return (
    <div className=" h-[180vh] w-screen flex justify-center items-center">
    <motion.div className=" bg-red-500 w-44 h-44" style={{scale,opacity}}>

    </motion.div>
    </div>
  )
}

export default UseScrollHook