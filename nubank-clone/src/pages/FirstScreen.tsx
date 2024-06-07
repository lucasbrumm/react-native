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
import { useNavigation } from '@react-navigation/native'

export default function FirstScreen() {
  const navigation = useNavigation()
  const [supported, setSupported] = useState<boolean>(false)
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    authenticate()
  }, [])

  const authenticate = () => {
    TouchID.isSupported()
      .then((success) => {
        setSupported(true)
      })
      .catch((error) => {
        console.log('error touch: ', error)
        alert('Touch ID não suportado')
      })
  }

  useEffect(() => {
    if (authenticated) {
      navigation.navigate('Home')
    }
  }, [authenticated])

  const handleLogin = () => {
    TouchID.authenticate('', configs)
      .then((sucess: any) => {
        setAuthenticated(true)
        console.log('sucesso', sucess)
      })
      .catch((error: any) => {
        console.log('falha na autenticação', error)
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
            uri: 'data:image/png;base64,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Ue/J19OVX1qfrrhh/VAssOfTb/NUXN7jYq1j9RIQqIE8Gnn8715OT//DdLUDfNuu8fqFZH7EkXeGP3Xnb9wmFgFpW5FG98qZOhjg322d/mkXprXy1Vp5RHLRn56TJracOdiYzIfj2XKaKl9hZcTBgsYd6/Z7WmzD+OTgW5t3747igzfvch6bGPz1HHV9RV3tAL/unHTRtR9Ia/PfUz9iMh+N58vRxv8uPQsL3lEICAyRfMhhjkneAT65Y8n9xFcSlflngByMl5+brc65ytNUosEyBASGWQ7JxJY11ftN28YWR3N5pHLqTZvyA/21qRNz51Edfrs6gyqfS5VHXjkabgVLhwQEgJDCRkIAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQgQEgBABASBEQAAIERAAQnJAphMAdKiZCgEBoGMHm41G49kEAB0oisbBZqtx8lACgE40i/3NxslkBAJAJ4pyAX1fs7U2/UsCgA6cPNn6t+bu6e3TRVE8kQCgPc/ufnP7wbl9II3iZwkAllc0Gunv8w+qgBRnVT9xOS8Ay8rTV/l9FZBqGiu17koA8L6Ke/P0Vf7R4lEmRiEALKNotYo7Fn6yGBCjEADeR1GktGdh9JE1Tv2MPev2P1N+cHsCgHf8322vX3bR0g+86zTecnzymfLdqwkA5rzaarU+ceoH3xWQPDw52Wr9bQKAPK5IrS8snbpacNr7gex5c/u95XrIngTAaja37vH69h+d7hcb7/c796zbt7uRmrct93kAjJwqHre/ftl7DiaWDcPudft2NlPzn8ofnpcAWA1eTY3W39x2fPv33u+T2hpZ7F67b2uz0fxp+dkfTgCMqjzq2Fe0Wn92ujWPU3U0NWVKC2Akld1I1V7A21/f3vb6d8chyKORRjPdXobk89E/A4BaWAxHcVa6K28o7+Q3h5/8q2mtlK4umo2bGqlx+Ur/PAD6oqj+J9/Go1H8LBKOBV15wl+MyRnpstRqXFYGZWv5J29NAAzadJmMMhDFs0WzOJTvQttam34UjcZS/w8ZeVOy62UiuwAAAABJRU5ErkJggg==',
          }}
          style={{ width: 150, height: 150 }}
        />
        <TouchableOpacity
          style={styles.buttonUsePassword}
          onPress={handleLogin}
        >
          <Text style={styles.textButtonPassword}>Usar senha do celular</Text>
        </TouchableOpacity>
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
    backgroundColor: 'white',
    borderRadius: 25,
    position: 'absolute',
    bottom: '2%',
  },
  textButtonPassword: {
    paddingVertical: 15,
    paddingHorizontal: '25%',
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
