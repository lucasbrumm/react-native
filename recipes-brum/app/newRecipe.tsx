import { StyleSheet, Text, TextInput, View } from 'react-native'
import { backgroundColor } from '../src/colors/color'

interface NewRecipeScreenProps {
  name: string
  ingredients: string
}

export default function NewRecipeScreen() {
  return (
    <View style={styles.container}>
      <Text>New Recipe</Text>
      <TextInput placeholder='name' />
      <TextInput placeholder='ingredients' />
      <TextInput placeholder='directions' />
      <TextInput placeholder='tested' />
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
