import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import myImage from '../assets/images/nu-icon.png'
import { useEffect, useState } from 'react'
import TouchID from 'react-native-touch-id'
import { configs } from '../configs/touchID'

export default function FirstScreen() {
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    authenticate()
  }, [])

  const authenticate = () => {
    TouchID.isSupported()
      .then((success) => {
        console.log('sucess :>> ', success)
        setSupported(true)
      })
      .catch((error) => {
        console.log('error touch: ', error)
        alert('Touch ID não suportado')
      })
  }

  const handleLogin = () => {
    TouchID.authenticate('', configs)
      .then((sucess: any) => {
        console.log('sucesso', sucess)
      })
      .catch((error: any) => {
        console.log('falha na autenticação', error)
      })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#820ad1' barStyle='light-content'></StatusBar>
      <Image source={myImage} style={{ width: 150, height: 150 }} />
      <TouchableOpacity style={styles.buttonUsePassword} onPress={handleLogin}>
        <Text style={styles.textButtonPassword}>Usar senha do celular</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#820ad1',
  },
  nubankImage: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },
  buttonUsePassword: {
    backgroundColor: 'white',
    borderRadius: 25,
    position: 'absolute',
    bottom: '2%',
  },
  textButtonPassword: {
    paddingVertical: 15,
    paddingHorizontal: '25%',
  },
})
