import { Button, Keyboard, StyleSheet, Text, View } from 'react-native'
import { backgroundColor, buttonColor } from '../../src/colors/color'
import { useEffect, useState } from 'react'
import { prismaClient } from '../../src/services/db'
import { NewRecipeFields } from '../../interfaces/INewRecipeFields'
import NewRecipeForm from '../../src/components/NewRecipeForm'
import RecipeCard from '../../src/components/RecipeCard'
import { IRecipe } from '../../interfaces/IRecipes'

export default function NewRecipeScreen() {
  const [isAddingIngredient, setIsAddingIngredient] = useState<boolean>(false)
  const [isAddingDirection, setIsAddingDirection] = useState<boolean>(false)
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
    directions: [],
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
    console.log('inputs :>> ', inputs)
    if (!inputs) {
      return
    }

    await prismaClient.recipe.create({
      data: {
        name: recipe.name,
        ingredients: JSON.stringify(recipe.ingredients, null, 2),
        directions: recipe.directions.toString(),
        tested: recipe.tested,
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
      recipe.name === '' ||
      recipe.ingredients.length === 0 ||
      recipe.directions.length === 0
    ) {
      return false
    }
    return true
  }

  function addNewIngredient() {
    setIsAddingIngredient(false)
    if (
      inputsNewRecipe.ingredients.ingredient === '' ||
      inputsNewRecipe.ingredients.count === ''
    )
      return
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

  function addNewDirection() {
    setIsAddingDirection(false)
    if (inputsNewRecipe.directions === '') return
    setRecipe({
      ...recipe,
      directions: [...recipe.directions, inputsNewRecipe.directions],
    })
    setInputsNewRecipe({ ...inputsNewRecipe, directions: '' })
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
        isAddingDirection={isAddingDirection}
        setIsAddingIngredient={setIsAddingIngredient}
        setIsAddingDirection={setIsAddingDirection}
        clearInputs={clearInputs}
        addNewIngredient={addNewIngredient}
        addNewDirection={addNewDirection}
      />
      <RecipeCard recipe={recipe} />
      <Button
        title='Enviar Receita'
        onPress={addNewRecipe}
        color={buttonColor}
      />
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
