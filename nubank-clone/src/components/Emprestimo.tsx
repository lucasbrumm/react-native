import { Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Emprestimo() {
  return (
    <View style={{ display: 'flex', gap: 10 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Empréstimo</Text>
        <FontAwesome name='angle-right' size={15} color={'black'} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Text>Valor disponível de até</Text>
        <Text>....</Text>
      </View>
    </View>
  )
}
