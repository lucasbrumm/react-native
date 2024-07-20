import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { backgroundColor, buttonColor } from '../src/colors/color'
import { useEffect, useState } from 'react'
import { prismaClient } from '../src/services/db'

interface NewRecipeScreenProps {
  name: string
  ingredient: string
  count: string
  directions: string
  tested: boolean
}

export default function NewRecipeScreen() {
  const [inputsNewRecipe, setInputsNewRecipe] = useState<NewRecipeScreenProps>({
    name: '',
    ingredient: '',
    count: '',
    directions: '',
    tested: false,
  })

  async function addNewRecipe() {
    const inputs = checkInputs()
    if (!inputs) {
      return
    }

    await prismaClient.recipe.create({
      data: {
        name: inputsNewRecipe.name,
        ingredients: inputsNewRecipe.ingredient,
        directions: inputsNewRecipe.directions,
        tested: inputsNewRecipe.tested,
      },
    })

    clearInputs()
    Keyboard.dismiss()
  }

  function clearInputs() {
    setInputsNewRecipe({
      name: '',
      ingredient: '',
      count: '',
      directions: '',
      tested: false,
    })
  }

  function checkInputs() {
    if (
      inputsNewRecipe.name === '' ||
      inputsNewRecipe.ingredient === '' ||
      inputsNewRecipe.count === '' ||
      inputsNewRecipe.directions === ''
    ) {
      return false
    }

    return true
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>New Recipe</Text>
      </View>
      <Text>Name</Text>
      <TextInput
        placeholder='name'
        value={inputsNewRecipe.name}
        onChangeText={(text) =>
          setInputsNewRecipe({ ...inputsNewRecipe, name: text })
        }
        style={styles.input}
      />
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <TextInput
          placeholder='ingredients'
          value={inputsNewRecipe.ingredient}
          onChangeText={(ingredient) =>
            setInputsNewRecipe({ ...inputsNewRecipe, ingredient: ingredient })
          }
          style={[{ ...styles.inputIngredientCount }, { marginRight: 6 }]}
        />
        <TextInput
          placeholder='count'
          value={inputsNewRecipe.count}
          onChangeText={(count) =>
            setInputsNewRecipe({ ...inputsNewRecipe, count: count })
          }
          style={styles.inputIngredientCount}
        />
      </View>
      <TextInput
        placeholder='directions'
        value={inputsNewRecipe.directions}
        onChangeText={(directions) =>
          setInputsNewRecipe({ ...inputsNewRecipe, directions: directions })
        }
        style={styles.input}
      />
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
