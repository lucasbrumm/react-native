import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { backgroundColor, buttonColor } from './src/colors/color'

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title='Visualizar Receitas'
        onPress={() => console.log('Button pressed')}
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
