import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Fragment, useEffect, useState } from 'react'
import TouchID from 'react-native-touch-id'
import { configs } from '../configs/touchID'
import {
  CommonActions,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native'
import { nubankLogo } from '../common/base64Images'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, setAuthentication } from '../redux/store'
import { User, UserData } from '../interfaces/UserInterface'
import { getUser } from '../services/user'

export default function FirstScreen() {
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    (state: RootState) => state.isAuthenticated
  )
  const [supported, setSupported] = useState<boolean>(false)
  const [usePassword, setUsePassword] = useState<boolean>(false)

  useEffect(() => {
    if (isFocused) authenticate()
    else {
      setUsePassword(false)
      setSupported(false)
    }
  }, [isFocused])

  const authenticate = () => {
    TouchID.isSupported()
      .then((success) => {
        // handleLogin()
        setSupported(true)
      })
      .catch((error) => {
        console.log('error touch: ', error)
        setUsePassword(true)
      })
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Home')
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      )
    }
  }, [isAuthenticated])

  const handleLogin = () => {
    TouchID.authenticate('', configs)
      .then((sucess: any) => {
        dispatch(setAuthentication(true))
      })
      .catch((error: any) => {
        console.log('falha na autenticação', error)
        setUsePassword(true)
      })
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#820ad1'
          barStyle='light-content'
        ></StatusBar>
        <Image
          source={{
            uri: nubankLogo,
          }}
          style={{ width: 150, height: 150 }}
        />
        <TouchableOpacity
          style={
            usePassword
              ? { ...styles.buttonUsePassword, bottom: '8%' }
              : styles.buttonUsePassword
          }
          onPress={handleLogin}
        >
          <Text style={styles.textButtonPassword}>Usar senha do celular</Text>
        </TouchableOpacity>

        {usePassword && (
          <TouchableOpacity
            style={styles.buttonUsePasswordNubank}
            onPress={() => navigation.navigate('PageUsePassword')}
          >
            <Text style={styles.textButtonPasswordNubank}>
              Usar senha do Nubank
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </Fragment>
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
    backgroundColor: '#e6e6e6',
    borderRadius: 25,
    position: 'absolute',
    bottom: '2%',
  },
  buttonUsePasswordNubank: {
    borderRadius: 25,
    position: 'absolute',
    bottom: '2%',
  },
  textButtonPassword: {
    paddingVertical: 15,
    paddingHorizontal: '25%',
  },
  textButtonPasswordNubank: {
    paddingVertical: 15,
    paddingHorizontal: '25%',
    color: '#e6e6e6',
  },
  containerAutenticado: {
    flex: 1,
  },
  header: {
    height: '15%',
    backgroundColor: '#820ad1',
    display: 'flex',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  imageAndOptions: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageUser: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  iconsHeader: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  containerTextUser: {},
  textUser: {
    color: '#FFF',
    fontSize: 18,
  },
  accountPadding: {
    padding: 20,
  },
  textAccountContainer: {},
  textAccount: {
    fontSize: 18,
  },
  accountContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  myCardsContainer: {
    display: 'flex',
    padding: 20,
  },
  myCards: {
    backgroundColor: '#e6e6e6',
    padding: 20,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  bannerContainer: {
    display: 'flex',
    padding: 20,
  },
  banners: {
    backgroundColor: '#e6e6e6',
    padding: 20,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
})
