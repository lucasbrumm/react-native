import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { backgroundColor, buttonColor } from '../colors/color'
import { NewRecipeFields } from '../../interfaces/INewRecipeFields'

interface NewRecipeScreenProps {
  inputsNewRecipe: NewRecipeFields
  setInputsNewRecipe: (inputs: NewRecipeFields) => void
  submitForm: () => void
  isAddingIngredient: boolean
  setIsAddingIngredient: (isAddingIngredient: boolean) => void
  clearInputs: () => void
  addNewIngredient: () => void
}

function NewRecipeForm({
  inputsNewRecipe,
  setInputsNewRecipe,
  submitForm,
  isAddingIngredient,
  setIsAddingIngredient,
  clearInputs,
  addNewIngredient,
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
      <View style={{}}>
        {!isAddingIngredient ? (
          <View style={{ width: '100%' }}>
            <Button
              title='Adicionar Ingrediente'
              color={buttonColor}
              onPress={() => setIsAddingIngredient(true)}
            />
          </View>
        ) : (
          <>
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <TextInput
                placeholder='Ingrediente'
                value={inputsNewRecipe.ingredients.ingredient}
                onChangeText={(ingredient) =>
                  setInputsNewRecipe({
                    ...inputsNewRecipe,
                    ingredients: {
                      ...inputsNewRecipe.ingredients,
                      ingredient: ingredient,
                    },
                  })
                }
                style={styles.inputIngredientCount}
              />
              <TextInput
                placeholder='Quantidade'
                value={inputsNewRecipe.ingredients.count}
                onChangeText={(count) =>
                  setInputsNewRecipe({
                    ...inputsNewRecipe,
                    ingredients: {
                      ...inputsNewRecipe.ingredients,
                      count: count,
                    },
                  })
                }
                style={styles.inputIngredientCount}
              />
            </View>
            <Button
              title='Adicionar Ingrediente'
              color={buttonColor}
              onPress={addNewIngredient}
            />
          </>
        )}
      </View>
      <TextInput
        placeholder='Instruções'
        value={inputsNewRecipe.directions}
        onChangeText={(directions) =>
          setInputsNewRecipe({ ...inputsNewRecipe, directions: directions })
        }
        style={styles.input}
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
