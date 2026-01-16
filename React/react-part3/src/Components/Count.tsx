import { useActionState } from "react"

const Count = () => {

  async function increment(previousState,formData){
    const data = Number(formData.get('value'))
    return Number(previousState+data)
  }

  const [state,formAction] = useActionState(increment,0)

  return (
    <form>
      <h1>{state}</h1>
      <button formAction={formAction}>Increment</button>
      <input name="value" placeholder="Enter tht value"></input>
    </form>
  )
}

export default Count