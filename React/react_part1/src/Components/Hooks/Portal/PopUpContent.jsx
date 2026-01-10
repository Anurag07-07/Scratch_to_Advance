import { createPortal } from 'react-dom';


const PopUpContent = ({copied}) => {
  return createPortal(copied && <div style={{position:"absolute",bottom:"2rem",fontSize:"5rem"}}>
    Copied Data!!
  </div>,document.querySelector('#popup'))
}

export default PopUpContent