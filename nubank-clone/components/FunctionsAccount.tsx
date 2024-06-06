import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fragment } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/AntDesign'

export default function FunctionsAccount() {
  const icons = [
    {
      name: 'dollar',
      color: 'black',
      size: 20,
      label: 'Área Pix',
    },
    {
      name: 'barcode',
      color: 'black',
      size: 20,
      label: 'Pagar',
    },
    {
      name: 'money',
      color: 'black',
      size: 20,
      label: 'Pegar emprestado',
    },
    {
      name: 'mobile-phone',
      color: 'black',
      size: 20,
      label: 'Recarga de celular',
    },
    {
      name: 'send-o',
      color: 'black',
      size: 20,
      label: 'Transferir',
    },
    {
      name: 'inbox',
      color: 'black',
      size: 20,
      label: 'Caixinhas',
    },
    {
      name: 'envelope-o',
      color: 'black',
      size: 20,
      label: 'Cobrar',
    },
    {
      name: 'btc',
      color: 'black',
      size: 20,
      label: 'Depositar',
    },
    {
      name: 'signal',
      color: 'black',
      size: 20,
      label: 'Investir',
    },
  ]
  return (
    <Fragment>
      {icons.map((icon, index) => {
        return (
          <View key={index} style={styles.container}>
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
      <Icon3 name={'right'} size={20} color={'black'}></Icon3>
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
