import { use } from "react"
const FetchTodo = () => {
  
  const fetchData = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
  }

  const data = use(fetchData())
  console.log(data);
  


  return (
    <div>{data.title}</div>
  )
}

export default FetchTodo