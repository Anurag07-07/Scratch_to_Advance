// import { useActionState } from "react"

import { useActionState } from "react"

// const Count = () => {

//   async function increment(previousState:any,formData:any){
//     const data = Number(formData.get('value'))
//     return Number(previousState+data)
//   }

//   const [state,formAction] = useActionState(increment,0)

//   return (
//     <form>
//       <h1>{state}</h1>
//       <button formAction={formAction}>Increment</button>
//       <input name="value" placeholder="Enter tht value"></input>
//     </form>
//   )
// }

// export default Count


const Count = () => {
  
  //@ts-expect-error idk

  async function increment(previous,formdata) {
    const data = Number(formdata.get('value'))
    return Number(data+previous)
  }

  const [state,formState] = useActionState(increment,0)
  return (
    <form>
      <h1>{state}</h1>
      <button formAction={formState}>Increment</button>
      <input name="value"  placeholder="Enter the Value"></input>
    </form>
  )
}

export default Count