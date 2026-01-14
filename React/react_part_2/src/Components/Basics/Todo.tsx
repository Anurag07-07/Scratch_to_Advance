import { useState, type ChangeEvent, type FormEvent } from "react"

interface ITodo{
  work:string
  isCompleted:boolean
}

const Todo = () => {

  const [todos,setTodos] = useState<ITodo[]>([])

  const [todo,setTodo] = useState<ITodo>({
    work:"", 
    isCompleted:false
  })

  function ChangeHandler(e:ChangeEvent<HTMLInputElement>){
    const {type,value,name,checked} = e.target
    setTodo((prev)=>({...prev,[name]:type==='checkbox' ? checked : value }))
  }

  function SubmitHandler(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    setTodos((prev)=>([...prev,todo]))
  }

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input placeholder="Enter The Work" type="text" name="work" value={todo.work} onChange={ChangeHandler}></input>
        <input title="Todo" type="checkbox" name="isCompleted" checked={todo.isCompleted} onChange={ChangeHandler}></input>
        <button type="submit">Add Todo</button>
      </form>
      <div>
        <>
          {
            todos.map(({work,isCompleted})=>(
              <div>{work} {isCompleted ? "Yes" : "No"}</div>
            ))
          }
        </>
      </div>
    </div>
  )
}

export default Todo