import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data,setData] = useState([])

  useEffect(()=>{
    async function main(url) {
      try {
        const response = await fetch(url)
        const value = await response.json()
        if(value && value.length){
          setData(value)
        }
      } catch (error) {
        console.log(`Data not recieved`);
        console.error(error);
      }
    }    
    main(url)
  },[url])

  return data
}

export default useFetch