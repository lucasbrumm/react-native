import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { capitalizeFirstLetter } from '../utils/helper'

export default function ProximoPagamento({
  invoiceDate,
}: {
  invoiceDate: Date
}) {
  const formattedDate = () => {
    const options = { weekday: 'long', day: 'numeric', month: 'short' }
    return capitalizeFirstLetter(
      invoiceDate.toLocaleDateString('pt-BR', options)
    )
  }

  return (
    <TouchableOpacity style={styles.cardProximoPagamento}>
      <View style={{ display: 'flex', gap: 10 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
            Próximo pagamento
          </Text>
          <FontAwesome name='angle-right' size={15} color={'black'} />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Text>{formattedDate()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardProximoPagamento: {
    borderColor: 'gray',
    borderTopWidth: 0.5,
    padding: 20,
  },
})
