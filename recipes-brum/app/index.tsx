import { StatusBar } from 'expo-status-bar'
import {
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native'
import { backgroundColor, buttonColor } from '../src/colors/color'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { initializeDb } from '../src/services/db'
import { Ionicons } from '@expo/vector-icons'

export default function HomeScreen() {
  const [dbInitialized, setDbInitialized] = useState<boolean>(false)

  const router = useRouter()

  function navigateToRecipes() {
    router.push('/recipes')
  }

  function navigateToNewRecipe() {
    router.push('/newRecipe')
  }

  useEffect(() => {
    const setup = async () => {
      await initializeDb()
      setDbInitialized(true)
    }
    setup()
  }, [])

  if (!dbInitialized) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Carregando...</Text>
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <Button
        title='Visualizar Receitas'
        onPress={() => navigateToRecipes()}
        color={buttonColor}
      />
      <TouchableOpacity onPress={navigateToNewRecipe} style={styles.buttonAdd}>
        {/* <Text style={styles.stylePlus}>+</Text> */}
        <Ionicons name='add' size={30} color='white' />
      </TouchableOpacity>
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
  buttonAdd: {
    backgroundColor: buttonColor,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    display: 'flex',
  },
  stylePlus: {
    color: 'white',
    fontSize: 30,
  },
})
