import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function MyCards() {
  return (
    <View style={styles.myCardsContainer}>
      <TouchableOpacity style={styles.myCards}>
        <FontAwesome name='credit-card' size={15} color={'black'} />
        <Text>Meus cartões</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  myCardsContainer: {
    display: 'flex',
    padding: 20,
  },
  myCards: {
    backgroundColor: '#e6e6e6',
    padding: 20,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
})
