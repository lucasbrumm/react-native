import { Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { CreditCard } from '../interfaces/CreditCardInterface'

export default function CreditCardComponent({
  creditCard,
}: {
  creditCard: CreditCard
}) {
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
        <Text
          style={{ fontWeight: 'bold' }}
        >{`R$ ${creditCard.creditCardBill.value}`}</Text>
      </View>

      <View>
        <Text
          style={{ fontSize: 12 }}
        >{`Limite disponível de R$ ${creditCard?.limitCreditCard}`}</Text>
      </View>
    </View>
  )
}
