import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { backgroundColor } from '../src/colors/color'
import recipeData from '../assets/recipes.json'

export default function Recipes() {
  // const recipes = [
  //   {
  //     id: 1,
  //     name: 'Bolo de cenoura',
  //     ingredients: ['cenoura', 'ovo', 'açúcar', 'farinha de trigo'],
  //   },
  //   {
  //     id: 2,
  //     name: 'Bolo de chocolate',
  //     ingredients: ['chocolate', 'ovo', 'açúcar', 'farinha de trigo'],
  //   },
  //   {
  //     id: 3,
  //     name: 'Bolo de laranja',
  //     ingredients: ['laranja', 'ovo', 'açúcar', 'farinha de trigo'],
  //   },
  // ]

  const recipes = recipeData.recipes

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%', padding: 10 }}
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              paddingHorizontal: 5,
              borderWidth: 1,
              marginBottom: 5,
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
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
