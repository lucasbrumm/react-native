import { Stack, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { Ingredient, IRecipe } from '../../interfaces/IRecipes'
import { backgroundColor } from '../../src/colors/color'
import { useEffect, useState } from 'react'
import { prismaClient } from '../../src/services/db'
import { IRecipesDb } from '../../interfaces/IRecipesDb'

function recipeByIdScreen() {
  const params = useLocalSearchParams()
  const { id } = params
  const [recipe, setRecipe] = useState<IRecipe>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getRecipeById()
  }, [])

  async function getRecipeById() {
    const idNumber = Number(id)
    const recipesDb: IRecipesDb | null = await prismaClient.recipe.findUnique({
      where: {
        id: idNumber,
      },
    })
    const recipeConverted = recipesDb ? convertToIRecipe(recipesDb) : null
    if (recipeConverted) setRecipe(recipeConverted)
    setLoading(false)
  }

  function convertToIRecipe(recipe: IRecipesDb): IRecipe {
    const ingredientsArray: Ingredient[] = JSON.parse(recipe.ingredients)

    const directionsArray =
      typeof recipe.directions === 'string'
        ? recipe.directions.split(`","`)
        : recipe.directions

    return {
      id: recipe.id,
      name: recipe.name,
      ingredients: ingredientsArray,
      directions: directionsArray,
      tested: recipe.tested,
    }
  }

  function formatDirections(direction: string): string {
    return direction
      .replace(/"|\[|\]/g, '')
      .concat(direction[direction.length - 1] === '.' ? '' : '.')
  }

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Receita não encontrada</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <Stack.Screen options={{ headerTitle: 'Receita' }} />
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Carregando...</Text>
          </View>
        </>
      ) : (
        <>
          <Stack.Screen options={{ headerTitle: recipe.name }} />
          <View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Nome da receita </Text>
              <Text>{recipe.name}</Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Ingredientes</Text>
            <View style={{ marginBottom: 10 }}>
              {recipe.ingredients.map((ing: Ingredient) => (
                <View key={ing.ingredient} style={{ marginBottom: 10 }}>
                  <Text>
                    {ing.ingredient} - {ing.count}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View>
            <Text style={{ fontWeight: 'bold' }}>Modo de preparo</Text>
            {recipe.directions.map((direction: string, index: number) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text>
                  {index + 1}° {formatDirections(direction)}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 20,
  },
})

export default recipeByIdScreen
