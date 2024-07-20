export interface NewRecipeFields {
  name: string
  ingredients: Ingredient
  directions: string
  tested: boolean
}

export interface Ingredient {
  ingredient: string
  count: string
}
