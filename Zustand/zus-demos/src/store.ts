// import { create } from "zustand";


// interface ICounter{
//   count:number
//   increment:()=>void
//   decrement:()=>void
// }

// export const Counter = create<ICounter>((set)=>({
//   count:0,
//   increment:()=>{
//     set((state)=>({count:state.count+1}))
//   },
//   decrement:()=>{
//     set((state)=>({count:state.count-1}))
//   }
// }))
import { create } from "zustand"

type UpdateData = Record<string, string>

interface RecipeItem {
  id: number
  title: string
}

interface IRecipe {
  recipe: RecipeItem[]
  addRecipe: (data: string) => void
  removeRecipe: (id: number) => void
  updateRecipe: (id: number, updateItem: UpdateData) => void
}

export const Recipe = create<IRecipe>((set) => ({
  recipe: [],

  addRecipe: (data) => {
    set((state) => ({
      recipe: [
        ...state.recipe,
        {
          id: Date.now(),
          title: data
        }
      ]
    }))
  },

  removeRecipe: (id) => {
    set((state) => ({
      recipe: state.recipe.filter((item) => item.id !== id)
    }))
  },

  updateRecipe: (id, updateItem) => {
    set((state) => ({
      recipe: state.recipe.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    }))
  }
}))