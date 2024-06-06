import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Fragment, useEffect, useState } from 'react'
import TouchID from 'react-native-touch-id'
import { configs } from '../configs/touchID'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import FunctionsAccount from '@/components/FunctionsAccount'
import { urlPix } from '@/components/IconPix'

export default function FirstScreen() {
  const [supported, setSupported] = useState<boolean>(false)
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [closeMoney, setCloseMoney] = useState<boolean>(false)
  const [balance, setBalance] = useState<string>('589,48')

  useEffect(() => {
    authenticate()
  }, [])

  const authenticate = () => {
    TouchID.isSupported()
      .then((success) => {
        // console.log('sucess :>> ', success)
        setSupported(true)
      })
      .catch((error) => {
        console.log('error touch: ', error)
        alert('Touch ID não suportado')
      })
  }

  useEffect(() => {
    if (authenticated) {
      // console.log('ala')
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
      {authenticated ? (
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
      ) : (
        <View style={styles.containerAutenticado}>
          <StatusBar
            backgroundColor='#820ad1'
            barStyle='light-content'
          ></StatusBar>
          <View style={styles.header}>
            <View style={styles.imageAndOptions}>
              <Image
                style={styles.imageUser}
                source={{
                  uri: 'data:image/png;base64,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',
                }}
              />
              <View style={styles.iconsHeader}>
                <TouchableOpacity onPress={() => setCloseMoney(!closeMoney)}>
                  {closeMoney ? (
                    <FontAwesome name='eye' size={25} color={'#FFF'} />
                  ) : (
                    <FontAwesome name='eye-slash' size={25} color={'#FFF'} />
                  )}
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome
                    name='question-circle'
                    size={25}
                    color={'#FFF'}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name='user-plus' size={25} color={'#FFF'} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containerTextUser}>
              <Text style={styles.textUser}>Olá, usuário</Text>
            </View>
          </View>

          <ScrollView>
            <View style={styles.accountPadding}>
              <TouchableOpacity style={styles.accountContainer}>
                <View style={styles.textAccountContainer}>
                  <Text style={styles.textAccount}>Conta</Text>
                  <Text style={styles.textAccount}>{`R$ ${balance}`}</Text>
                </View>
                <FontAwesome name='angle-right' size={15} color={'black'} />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <FunctionsAccount />
            </ScrollView>
          </ScrollView>

          <View style={styles.myCards}>
            <Text>Meus cartões</Text>
          </View>
        </View>
      )}
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
    padding: 15,
  },
  textAccountContainer: {},
  textAccount: {
    fontSize: 18,
  },
  accountContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userFuncitons: {
    display: 'flex',
    flexDirection: 'row',
  },
  myCards: {
    backgroundColor: '#e6e6e6',
  },
})
