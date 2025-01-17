import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { MoneyLoan } from '../interfaces/MoneyLoanInterface'
import { returnDotValues } from '../utils/helper'

export default function Emprestimo({
  moneyLoan,
  closeValues,
}: {
  moneyLoan: MoneyLoan
  closeValues: boolean
}) {
  return (
    <TouchableOpacity style={styles.cardEmprestimoCard}>
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
            >{`R$ ${moneyLoan.loanLimit}`}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardEmprestimoCard: {
    borderColor: 'gray',
    borderTopWidth: 0.5,
    padding: 20,
  },
})
