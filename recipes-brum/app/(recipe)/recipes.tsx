import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { backgroundColor } from '../../src/colors/color'
import { useEffect, useRef, useState } from 'react'
import { getRecipesFromGit } from '../../api/recipes'
import { Ingredient, IRecipe } from '../../interfaces/IRecipes'
import { prismaClient } from '../../src/services/db'
import { useRouter } from 'expo-router'

interface recipesdb {
  id: number
  name: string
  ingredients: string
  directions: string | string[]
  tested: boolean
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [inputSearch, setInputSearch] = useState<string>('')
  const [listSearch, setListSearch] = useState<IRecipe[]>([])
  const ref = useRef(null)

  const router = useRouter()

  useEffect(() => {
    getRecipes()
  }, [])

  async function getRecipes() {
    const recipesDb: recipesdb[] = await prismaClient.recipe.findMany()
    setLoading(false)
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

  function goToRecipe(item: IRecipe, id: number) {
    const itemSerialized = JSON.stringify(item)
    router.push({
      pathname: '/(recipe)/[id]',
      params: { id: id, recipeParam: itemSerialized },
    })
  }

  function onChangeTextInput(text: string) {
    setInputSearch(text)
    if (text === '') {
      setListSearch([])
      return
    }
    const recipesFiltered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(text.toLowerCase())
    )
    setListSearch(recipesFiltered)
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Carregando...</Text>
        </View>
      ) : recipes.length === 0 ? (
        <View>
          <Text>Nenhuma receita cadastrada</Text>
        </View>
      ) : (
        <>
          <FlatList
            style={{ width: '100%', padding: 10 }}
            data={listSearch.length > 0 ? listSearch : recipes}
            ListHeaderComponent={
              <TextInput
                placeholder='Pesquisar receita'
                value={inputSearch}
                onChangeText={(text) => {
                  onChangeTextInput(text)
                }}
                style={{
                  width: '100%',
                  backgroundColor: '#F0F0F0',
                  borderRadius: 10,
                  borderWidth: 0.5,
                  marginBottom: 10,
                  padding: 10,
                }}
              />
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => goToRecipe(item, item.id)}
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  borderWidth: 0.5,
                  borderRadius: 4,
                  marginBottom: 5,
                  backgroundColor: '#F0F0F0',
                }}
              >
                <View style={{ display: 'flex', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
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
