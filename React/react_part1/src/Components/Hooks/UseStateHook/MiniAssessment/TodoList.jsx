import React, { useState } from 'react'

const TodoList = () => {
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState("")
  function AddTodo(){
    if(todo && todo.trim()){
      setTodos([...todos,{
        id:Math.random()*10,
        name:todo
      }])
    }
    setTodo("")
  }
  return (
    <div>
      <h1>Todo</h1>
      <div>
        {
          todos.map((todo)=>{
            return <div key={todo.id}>{todo.name}</div>
          })
        }
      </div>
      <div>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)}  placeholder='Enter the Todo'></input>
        <button onClick={AddTodo}>AddTodo</button>
      </div>
    </div>
  )
}

export default TodoList