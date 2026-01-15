const EventHandling = () => {

  function HandleClick(e:React.MouseEvent<HTMLButtonElement>){
   console.log(e);
  }

  return (
    <div>
      <button onClick={HandleClick}>Click Me</button>
    </div>
  )
}

export default EventHandling