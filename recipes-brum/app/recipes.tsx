import { StyleSheet, Text, View } from 'react-native'
import { backgroundColor } from '../src/colors/color'

export default function Recipes() {
  return (
    <View style={styles.container}>
      <Text>Recipeseeee</Text>
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
