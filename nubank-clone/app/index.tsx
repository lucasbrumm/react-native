import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import myImage from '../assets/images/nu-icon.png'
import { useState } from 'react'

export default function FirstScreen() {
  const [requestPassword, setRequestPassword] = useState(false)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#820ad1' barStyle='light-content'></StatusBar>
      <Image source={myImage} style={{ width: 150, height: 150 }} />
      <TouchableOpacity style={styles.buttonUsePassword}>
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
