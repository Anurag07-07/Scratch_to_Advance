const Posts = () => {
  const posts = Array.from({length:100},(_,index)=> `Posts ${index+1}`)

  return (
    <div>
      {
        posts.map((m)=>(
          <div>{m}</div>
        ))
      }
    </div>
  )
}

export default Posts