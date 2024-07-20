import { StyleSheet, Text, View } from 'react-native'

function RecipeCard() {
  return (
    <View style={styles.container}>
      <Text>Nome da receita:</Text>
      <Text>Testada:</Text>
      <Text>Ingredientes:</Text>
      <Text>Modo de preparo:</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
})

export default RecipeCard
