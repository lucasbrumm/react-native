import { Ingredient } from './IRecipes'

export interface NewRecipeFields {
  name: string
  ingredients: Ingredient
  directions: string
  tested: boolean
}
