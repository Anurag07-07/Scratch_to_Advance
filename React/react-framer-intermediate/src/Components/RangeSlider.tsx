import {motion, useMotionValue} from 'framer-motion'
import type { ChangeEvent } from 'react'
const RangeSlider = () => {
  const value = useMotionValue(1)

  function ChangeHandler(e:ChangeEvent<HTMLInputElement>){
    value.set(parseFloat(e.target.value))
  }
  return (
    <div className=' flex justify-center items-center flex-col w-screen h-screen'>
      <motion.div style={{scale:value}} className=' w-28 h-28 bg-red-700 rounded-full'></motion.div>
      <input type='range' onChange={ChangeHandler} min={1} max={50}step={1} defaultValue={0} className=' bg-white'></input>
    </div>
  )
}

export default RangeSlider