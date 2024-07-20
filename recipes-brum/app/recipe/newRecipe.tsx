import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { backgroundColor, buttonColor } from '../../src/colors/color'
import { useEffect, useState } from 'react'
import { prismaClient } from '../../src/services/db'
import { NewRecipeFields } from '../../interfaces/INewRecipeFields'
import NewRecipeForm from '../../src/components/NewRecipeForm'
import RecipeCard from '../../src/components/RecipeCard'
import { IRecipe } from '../../interfaces/IRecipes'

export default function NewRecipeScreen() {
  const [isAddingIngredient, setIsAddingIngredient] = useState<boolean>(false)
  const [inputsNewRecipe, setInputsNewRecipe] = useState<NewRecipeFields>({
    name: '',
    ingredients: {
      ingredient: '',
      count: '',
    },
    directions: '',
    tested: false,
  })
  const [recipe, setRecipe] = useState<IRecipe>({
    id: 0,
    name: '',
    ingredients: [],
    tested: false,
  })

  useEffect(() => {
    setRecipe({
      ...recipe,
      name: inputsNewRecipe.name,
    })
  }, [inputsNewRecipe])

  async function addNewRecipe() {
    const inputs = checkInputs()
    if (!inputs) {
      return
    }

    await prismaClient.recipe.create({
      data: {
        name: inputsNewRecipe.name,
        ingredients: inputsNewRecipe.ingredients.toString(),
        directions: inputsNewRecipe.directions,
        tested: inputsNewRecipe.tested,
      },
    })

    clearInputs()
    Keyboard.dismiss()
  }

  function clearInputs() {
    if (isAddingIngredient) {
      setInputsNewRecipe({
        ...inputsNewRecipe,
        ingredients: { ingredient: '', count: '' },
      })
    } else {
      setInputsNewRecipe({
        name: '',
        ingredients: { ingredient: '', count: '' },
        directions: '',
        tested: false,
      })
    }
  }

  function checkInputs() {
    if (
      inputsNewRecipe.name === '' ||
      inputsNewRecipe.ingredients.ingredient === '' ||
      inputsNewRecipe.ingredients.count === '' ||
      inputsNewRecipe.directions === ''
    ) {
      return false
    }

    return true
  }

  function addNewIngredient() {
    setIsAddingIngredient(false)
    setRecipe({
      ...recipe,
      ingredients: [
        ...recipe.ingredients,
        {
          ingredient: inputsNewRecipe.ingredients.ingredient,
          count: inputsNewRecipe.ingredients.count,
        },
      ],
    })
    clearInputs()
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>New Recipe</Text>
      </View>
      <NewRecipeForm
        inputsNewRecipe={inputsNewRecipe}
        setInputsNewRecipe={setInputsNewRecipe}
        submitForm={addNewRecipe}
        isAddingIngredient={isAddingIngredient}
        setIsAddingIngredient={setIsAddingIngredient}
        clearInputs={clearInputs}
        addNewIngredient={addNewIngredient}
      />
      <RecipeCard recipe={recipe} />
      <Button title='Submit' onPress={addNewRecipe} color={buttonColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 10,
    paddingHorizontal: 5,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    marginVertical: 10,
  },
  inputIngredientCount: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: '49%',
  },
})
