
interface IButton{
  label:string
  onClick:()=>void
  disabled:boolean
}

const Button = ({label,onClick,disabled}:IButton) => {
  return (
    <div>
      <button disabled={disabled} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button