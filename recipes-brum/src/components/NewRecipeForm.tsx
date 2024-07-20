import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { backgroundColor, buttonColor } from '../colors/color'
import { NewRecipeFields } from '../../interfaces/INewRecipeFields'

interface NewRecipeScreenProps {
  inputsNewRecipe: NewRecipeFields
  setInputsNewRecipe: (inputs: NewRecipeFields) => void
  submitForm: () => void
}

function NewRecipeForm({
  inputsNewRecipe,
  setInputsNewRecipe,
  submitForm,
}: NewRecipeScreenProps) {
  return (
    <View>
      <TextInput
        placeholder='Nome da receita'
        value={inputsNewRecipe.name}
        onChangeText={(text) =>
          setInputsNewRecipe({ ...inputsNewRecipe, name: text })
        }
        style={styles.input}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <TextInput
          placeholder='Ingrediente'
          value={inputsNewRecipe.ingredient}
          onChangeText={(ingredient) =>
            setInputsNewRecipe({ ...inputsNewRecipe, ingredient: ingredient })
          }
          style={styles.inputIngredientCount}
        />
        <TextInput
          placeholder='Quantidade'
          value={inputsNewRecipe.count}
          onChangeText={(count) =>
            setInputsNewRecipe({ ...inputsNewRecipe, count: count })
          }
          style={styles.inputIngredientCount}
        />
      </View>
      <TextInput
        placeholder='Instruções'
        value={inputsNewRecipe.directions}
        onChangeText={(directions) =>
          setInputsNewRecipe({ ...inputsNewRecipe, directions: directions })
        }
        style={styles.input}
      />
      <Button title='Submit' onPress={submitForm} color={buttonColor} />
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
    borderWidth: 0.5,
  },
  inputIngredientCount: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: '49%',
    borderWidth: 0.5,
  },
})

export default NewRecipeForm
