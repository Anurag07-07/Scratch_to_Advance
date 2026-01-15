import { createContext } from "react"

interface ProviderProps{
  count:number
  increment:()=>void
  decrement:()=>void
}

export const ContextProvider = createContext<ProviderProps>({
  count:0,
  increment:()=>{},
  decrement:()=>{}
})
