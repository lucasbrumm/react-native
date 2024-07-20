import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { backgroundColor } from '../src/colors/color'
import { useEffect, useState } from 'react'
import { getRecipesFromGit } from '../api/recipes'
import { IRecipe } from '../interfaces/IRecipes'
import { prismaClient } from '../src/services/db'

interface recipesdb {
  id: number
  name: string
  ingredients: string
  directions: string
  tested: boolean
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [recipesDb, setRecipesDb] = useState<recipesdb[]>([])

  console.log('recipesDb', recipesDb)

  useEffect(() => {
    getRecipes()
    getRecipesDb()
  }, [])

  async function getRecipes() {
    const teste = await getRecipesFromGit()
    setRecipes(teste)
    return teste
  }

  async function getRecipesDb() {
    const recipesDb = await prismaClient.recipe.findMany()
    setRecipesDb(recipesDb)
  }

  function alertRecipes() {
    Alert.alert('Receitas', JSON.stringify(recipesDb))
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
      <Button title='checkar receitas no banco' onPress={alertRecipes}></Button>
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
