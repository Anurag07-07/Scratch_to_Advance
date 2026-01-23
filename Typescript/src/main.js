const obj = {
  name:"JS",
  value:()=>{
    setTimeout(()=>{
      console.log(this.name);
    })
  }
}

obj.value()