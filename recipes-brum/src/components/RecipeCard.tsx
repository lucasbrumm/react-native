import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { IRecipe } from '../../interfaces/IRecipes'
import { AntDesign, Feather } from '@expo/vector-icons'

interface RecipeCardProps {
  recipe: IRecipe
}

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <ScrollView style={styles.container}>
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
        }}
      >
        {recipe.ingredients.length === 0 ? (
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              borderWidth: 0.5,
              borderRadius: 4,
              padding: 10,
            }}
          >
            <Text>Sem ingredientes</Text>
          </View>
        ) : (
          recipe.ingredients.map((ingredient, index) => (
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
              <View>
                <Text key={ingredient.ingredient}>
                  {ingredient.ingredient} - {ingredient.count}
                </Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <TouchableOpacity>
                  <Feather name='edit' size={15} color='black' />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name='delete' size={15} color='black' />
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </View>
      <View
        style={{ paddingVertical: 10, display: 'flex', alignItems: 'center' }}
      >
        <Text>Modo de preparo</Text>
      </View>
      <View
        style={{
          marginBottom: 10,
          display: 'flex',
          width: '100%',
          paddingHorizontal: 5,
        }}
      >
        {recipe.directions.length === 0 ? (
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              borderWidth: 0.5,
              borderRadius: 4,
              padding: 10,
            }}
          >
            <Text>Sem instruções</Text>
          </View>
        ) : (
          recipe.directions.map((direction, index) => {
            return (
              <View
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  gap: 10,
                  borderWidth: 0.5,
                  borderRadius: 4,
                  marginBottom: 5,
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ maxWidth: '85%' }}>
                  <Text>
                    {index + 1}º {direction}
                  </Text>
                </View>
                <View
                  style={{ display: 'flex', flexDirection: 'row', gap: 10 }}
                >
                  <TouchableOpacity>
                    <Feather name='edit' size={15} color='black' />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <AntDesign name='delete' size={15} color='black' />
                  </TouchableOpacity>
                </View>
              </View>
            )
          })
        )}
      </View>
    </ScrollView>
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
