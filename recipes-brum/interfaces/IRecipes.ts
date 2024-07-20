export interface IRecipe {
  id: number
  name: string
  ingredients: Ingredient[]
  directions: string[]
  tested: boolean
}

export interface Ingredient {
  ingredient: string
  count: string
}
