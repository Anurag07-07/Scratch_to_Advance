import FormButton from "./FormButton";

const Form = () => {

  async function FormAction(formData:any){
    
    await new Promise((resolve)=>setTimeout(resolve,2000))
    
    const userdata = {
      name:formData.get('name'),
      email:formData.get('email'),
      password:formData.get('password')
    }
    console.log(userdata);
  }

  return (
    <form action={FormAction}>
      <input name="name" placeholder="Enter the Name"></input>
      <input name="email" placeholder="Enter the Email"></input>
      <input name="rollno" placeholder="Enter the Roll No"></input>
      <FormButton></FormButton>
    </form>
  )
}

export default Form