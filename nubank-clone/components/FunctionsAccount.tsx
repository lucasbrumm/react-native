import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fragment } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function FunctionsAccount() {
  const icons = [
    {
      id: 1,
      name: 'dollar',
      color: 'black',
      size: 20,
      label: 'Área Pix',
    },
    {
      id: 2,
      name: 'barcode',
      color: 'black',
      size: 20,
      label: 'Pagar',
    },
    {
      id: 3,
      name: 'money',
      color: 'black',
      size: 20,
      label: 'Pegar emprestado',
    },
    {
      id: 4,
      name: 'mobile-phone',
      color: 'black',
      size: 20,
      label: 'Recarga de celular',
    },
    {
      id: 5,
      name: 'send-o',
      color: 'black',
      size: 20,
      label: 'Transferir',
    },
    {
      id: 6,
      name: 'inbox',
      color: 'black',
      size: 20,
      label: 'Caixinhas',
    },
    {
      id: 7,
      name: 'envelope-o',
      color: 'black',
      size: 20,
      label: 'Cobrar',
    },
    {
      id: 8,
      name: 'btc',
      color: 'black',
      size: 20,
      label: 'Depositar',
    },
    {
      id: 9,
      name: 'signal',
      color: 'black',
      size: 20,
      label: 'Investir',
    },
  ]
  return (
    <Fragment>
      {icons.map((icon) => {
        return (
          <View key={icon.id} style={styles.container}>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome
                name={icon.name}
                size={icon.size}
                color={icon.color}
              />
            </TouchableOpacity>
            <Text style={{ width: 62, textAlign: 'center' }}>{icon.label}</Text>
          </View>
        )
      })}
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
  },
  icon: {
    padding: 20,
    backgroundColor: '#e6e6e6',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
