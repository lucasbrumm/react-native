import { useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TextInputMask from 'react-native-text-input-mask'
import { useNavigation } from '@react-navigation/native'

export default function PageUsePassword() {
  const navigation = useNavigation()
  const inputRef = useRef<TextInput>(null)
  const [password, setPassword] = useState<string | undefined>('')
  const [closePassword, setClosePassword] = useState<boolean>(false)
  const [sendPassword, setSendPassword] = useState<boolean>(false)

  const handleEyeIcon = () => {
    return closePassword ? (
      <FontAwesome name='eye' size={25} color={'grey'} />
    ) : (
      <FontAwesome name='eye-slash' size={25} color={'grey'} />
    )
  }

  const backPage = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (password?.length === 8) {
      setSendPassword(true)
    } else {
      setSendPassword(false)
    }
  }, [password])

  return (
    <View style={styles.containerPage}>
      <View>
        <TouchableOpacity style={styles.containerBackIcon} onPress={backPage}>
          <Icon name='arrowleft' size={30} color={'grey'} />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <View style={styles.cardTexts}>
            <Text style={styles.textTitle}>Digite sua senha do aplicativo</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                style={styles.inputPassword}
                selectionColor={'gray'}
                maxLength={50}
                ref={inputRef}
                secureTextEntry={!closePassword}
                autoCapitalize='none'
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 0 }}
                onPress={() => setClosePassword(!closePassword)}
              >
                {handleEyeIcon()}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.okButton} disabled={!sendPassword}>
        <Text
          style={{
            color: sendPassword ? '#820ad1' : 'grey',
            fontWeight: 'bold',
          }}
        >
          OK
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    display: 'flex',
    justifyContent: 'space-between',
  },
  containerBackIcon: {
    padding: 10,
  },
  cardTexts: {
    width: '60%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 20,
  },
  inputPassword: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderStyle: 'dotted',
  },
  okButton: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
})
