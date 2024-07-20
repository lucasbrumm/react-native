import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IRecipe } from '../../interfaces/IRecipes'
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons'

interface RecipeCardProps {
  recipe: IRecipe
}

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <View style={styles.container}>
      <Text>Nome da receita: {recipe.name}</Text>
      <Text>Ingredientes:</Text>
      <View>
        {recipe.ingredients.map((ingredient) => (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Text key={ingredient.ingredient}>
              {ingredient.ingredient} - {ingredient.count}
            </Text>
            <TouchableOpacity>
              <Feather name='edit' size={15} color='black' />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name='delete' size={15} color='black' />
            </TouchableOpacity>
          </View>
        ))}
      </View>
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
