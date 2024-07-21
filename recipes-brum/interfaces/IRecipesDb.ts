export interface IRecipesDb {
  id: number
  name: string
  ingredients: string
  directions: string | string[]
  tested: boolean
}
