import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { backgroundColor } from '../../src/colors/color'
import { useEffect, useState } from 'react'
import { getRecipesFromGit } from '../../api/recipes'
import { Ingredient, IRecipe } from '../../interfaces/IRecipes'
import { prismaClient } from '../../src/services/db'

interface recipesdb {
  id: number
  name: string
  ingredients: string
  directions: string | string[]
  tested: boolean
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [recipesDb, setRecipesDb] = useState<recipesdb[]>([])

  useEffect(() => {
    getRecipes()
    getRecipesDb()
  }, [])

  // async function getRecipes() {
  //   const teste = await getRecipesFromGit()
  //   setRecipes(teste)
  //   return teste
  // }

  async function getRecipes() {
    const recipesDb: recipesdb[] = await prismaClient.recipe.findMany()

    const recipesAux: IRecipe[] = recipesDb.map((recipe) => {
      const ingredientsParsed: Ingredient[] = JSON.parse(
        recipe.ingredients
      ).map((ing: { ingredient: string; count: string }) => ({
        ingredient: ing.ingredient,
        count: ing.count,
      }))

      const directionsFormatted: string[] =
        typeof recipe.directions === 'string'
          ? recipe.directions.split(',')
          : recipe.directions

      return {
        id: recipe.id,
        name: recipe.name,
        ingredients: ingredientsParsed,
        directions: directionsFormatted,
        tested: recipe.tested,
      }
    })

    setRecipes(recipesAux)
  }

  async function getRecipesDb() {
    const recipesDb = await prismaClient.recipe.findMany()
    setRecipesDb(recipesDb)
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%', padding: 10 }}
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              paddingHorizontal: 5,
              borderWidth: 1,
              marginBottom: 5,
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
