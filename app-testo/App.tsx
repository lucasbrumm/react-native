import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Clique aqui para marcar</Text>
      <Button title='Marcar' onPress={() => console.log('Marcar')} />
      <Text>Visualizar marcações</Text>
      <Button title='Marcar' onPress={() => console.log('Visualizar')} />

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
