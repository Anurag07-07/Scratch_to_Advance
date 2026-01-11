import React from 'react'
import useFetch from './useFetch'

const FetchingData = () => {
  const data = useFetch('https://jsonplaceholder.typicode.com/todos')
  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default FetchingData