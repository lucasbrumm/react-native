import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { CreditCard } from '../interfaces/CreditCardInterface'
import { returnDotValues } from '../utils/helper'

export default function CreditCardComponent({
  creditCard,
  closeValues,
}: {
  creditCard: CreditCard
  closeValues: boolean
}) {
  return (
    <TouchableOpacity style={styles.cardCreditCard}>
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
          {!closeValues ? (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingVertical: 5,
              }}
            >
              {returnDotValues(5)}
            </View>
          ) : (
            <Text
              style={{ fontWeight: 'bold' }}
            >{`R$ ${creditCard.creditCardBill.value}`}</Text>
          )}
        </View>

        <View>
          <Text
            style={{ fontSize: 12 }}
          >{`Limite disponível de R$ ${creditCard?.limitCreditCard}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  cardCreditCard: {
    borderColor: 'gray',
    borderTopWidth: 0.5,
    padding: 20,
  },
})
