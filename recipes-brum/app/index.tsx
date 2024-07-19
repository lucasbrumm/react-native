import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import { backgroundColor, buttonColor } from '../src/colors/color'
import { Link, Navigator, useNavigation, useRouter } from 'expo-router'

export default function HomeScreen() {
  const navigation = useNavigation()
  const router = useRouter()

  function navigateToRecipes() {
    router.push('/recipes')
  }

  return (
    <View style={styles.container}>
      <Button
        title='Visualizar Receitas'
        onPress={() => navigateToRecipes()}
        color={buttonColor}
      />
      <StatusBar style='auto' />
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
