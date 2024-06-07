import { Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function CreditCard() {
  return (
    <View style={{ display: 'flex', gap: 10 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Cartão de crédito
        </Text>
        <FontAwesome name='angle-right' size={15} color={'black'} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Text>Fatura atual</Text>
        <Text>....</Text>
      </View>

      <View>
        <Text>{`Limite disponível de ...`}</Text>
      </View>
    </View>
  )
}
