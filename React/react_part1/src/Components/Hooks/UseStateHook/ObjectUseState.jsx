import React, { useState } from 'react'

const ObjectUseState = () => {
  const [lang,setLang] = useState({
    name:"Javascript",
    abb:"Js",
    lang:1
  })

  function UpdateLang(){
    setLang({...lang,name:"Typescript",abb:"TS",lang:lang.lang+1})
  }

  return (
    <div>
      <h1>Lang:{lang.name}</h1>
      <h1>Abb:{lang.abb}</h1>
      <h1>Number of Lang:{lang.lang}</h1>
      <button onClick={UpdateLang}>Update Language</button>
    </div>
  )
}

export default ObjectUseState