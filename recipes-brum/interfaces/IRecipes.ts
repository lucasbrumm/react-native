export interface IRecipe {
  id: number
  name: string
  ingredients: Ingredient[]
  tested: boolean
}

export interface Ingredient {
  ingredient: string
  count: string
}
