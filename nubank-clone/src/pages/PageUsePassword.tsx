import { useIsFocused } from '@react-navigation/native'
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

export default function PageUsePassword() {
  const inputRef = useRef<TextInput>(null)
  const isFocused = useIsFocused()
  const [password, setPassword] = useState<string>('')
  const [closePassword, setClosePassword] = useState<boolean>(false)

  const handleEyeIcon = () => {
    return closePassword ? (
      <FontAwesome name='eye' size={25} color={'grey'} />
    ) : (
      <FontAwesome name='eye-slash' size={25} color={'grey'} />
    )
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <View style={styles.containerPage}>
      <View style={styles.containerBackIcon}>
        <Icon name='arrowleft' size={30} color={'grey'} />
      </View>
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
  )
}

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  containerBackIcon: {
    padding: 10,
  },
  cardTexts: {
    // backgroundColor: 'red',
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
})
