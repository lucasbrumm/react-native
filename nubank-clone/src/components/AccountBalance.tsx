import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { returnDotValues } from '../utils/helper'
import { Account } from '../interfaces/AccountInterface'

export default function AccountBalance({
  account,
  closeValues,
}: {
  account: Account
  closeValues: boolean
}) {
  return (
    <View style={styles.accountPadding}>
      <TouchableOpacity style={styles.accountContainer}>
        <View style={styles.textAccountContainer}>
          <Text style={styles.textAccount}>Conta</Text>
          {!closeValues ? (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingVertical: 5,
              }}
            >
              {returnDotValues(10)}
            </View>
          ) : (
            <Text style={styles.textAccount}>{`R$ ${account.balance}`}</Text>
          )}
        </View>
        <FontAwesome name='angle-right' size={15} color={'black'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  accountPadding: {
    padding: 20,
  },
  accountContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textAccountContainer: {},
  textAccount: {
    fontSize: 18,
  },
})
