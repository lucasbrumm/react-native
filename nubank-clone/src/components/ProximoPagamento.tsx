import { Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function ProximoPagamento() {
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
        <Text>Segunda-feira, 17 Jun</Text>
      </View>
    </View>
  )
}
