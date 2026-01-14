export interface Info{
  name:string
  age:number
  email:string
} 

export interface AdminInfoList extends Info{
  companyname:string
  salary:string
}
