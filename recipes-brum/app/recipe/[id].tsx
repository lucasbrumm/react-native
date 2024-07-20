import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { Ingredient } from '../../interfaces/IRecipes'
import { backgroundColor } from '../../src/colors/color'

function recipeByIdScreen() {
  const params = useLocalSearchParams()
  const { id, recipeParam } = params

  const recipe =
    typeof recipeParam === 'string'
      ? JSON.parse(recipeParam)
      : Array.isArray(recipeParam) && recipeParam.length > 0
      ? JSON.parse(recipeParam[0])
      : null

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Receita não encontrada</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Id da receita {id}</Text>
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
              {index + 1}°{' '}
              {direction[0] === ' ' ? direction.slice(1) : direction}
            </Text>
          </View>
        ))}
      </View>
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
