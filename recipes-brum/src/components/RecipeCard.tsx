import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IRecipe } from '../../interfaces/IRecipes'
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons'

interface RecipeCardProps {
  recipe: IRecipe
}

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <View style={styles.container}>
      <View
        style={{ paddingVertical: 10, display: 'flex', alignItems: 'center' }}
      >
        <Text>{recipe.name ? recipe.name : 'Nome da receita'}</Text>
      </View>
      <View
        style={{ paddingVertical: 10, display: 'flex', alignItems: 'center' }}
      >
        <Text>Ingredientes</Text>
      </View>
      <View
        style={{
          marginBottom: 10,
          display: 'flex',
          width: '100%',
          paddingHorizontal: 5,
          // backgroundColor: 'red',
        }}
      >
        {recipe.ingredients.map((ingredient, index) => (
          <View
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              gap: 10,
              borderWidth: 0.5,
              borderRadius: 4,
              marginBottom: 5,
            }}
          >
            <Text key={ingredient.ingredient}>
              {ingredient.ingredient} - {ingredient.count}
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <TouchableOpacity>
                <Feather name='edit' size={15} color='black' />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name='delete' size={15} color='black' />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <Text>Modo de preparo:</Text>
      {recipe.directions.map((direction, index) => {
        return (
          <View
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Text>
              {index + 1}º {direction}
            </Text>
            <TouchableOpacity>
              <Feather name='edit' size={15} color='black' />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name='delete' size={15} color='black' />
            </TouchableOpacity>
          </View>
        )
      })}
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
