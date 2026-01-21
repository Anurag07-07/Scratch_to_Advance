import {motion} from 'framer-motion'
import images from '../assets/wp16091497-pagani-desktop-wallpapers.jpg'
const Card = () => {
  return (
    <motion.div className=' flex justify-center items-center flex-col'
    initial={{rotate:0,scale:1}}
    whileHover={{scale:1.3,rotate:3}}
    whileTap={{scale:1.5,rotate:5}}
    dragElastic={0.5}
    drag
    dragConstraints={{
      top:-50,
      bottom:50,
      left:-40,
      right:40
    }}
    transition={{
      type:"spring",
      stiffness:300,
      duration:1.2
    }}
    >
      <div className=' w-96'>
        <img alt='car' className=' w-full h-full object-cover' src={images}></img>
      </div>
      <div className=' w-96 bg-white max-h-screen flex justify-center items-start gap-y-4 flex-col text-sm px-3 py-5 font-light'>
        Pagani is an Italian hypercar manufacturer founded by Horacio Pagani.
        It is known for extreme performance, advanced carbon-fiber engineering, and handcrafted design.
        <div className=' w-32 h-10 bg-teal-200 flex justify-center items-center rounded-sm font-bold'>Learn More</div>
      </div>
    </motion.div>
  )
}

export default Card