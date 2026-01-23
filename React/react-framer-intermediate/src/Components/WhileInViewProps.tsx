import {motion} from 'framer-motion'

const WhileInViewProps = () => {
  return (
    <div className=' h-screen'>
      <div className=' w-screen h-full bg-yellow-300 '></div>
      <div className=' w-screen h-full flex justify-center items-center' >
        <motion.div initial={{scale:0.5,opacity:0}} transition={{duration:2}} whileInView={{opacity:1,scale:1.3}}>While in View</motion.div>
      </div>
    </div>
  )
}

export default WhileInViewProps