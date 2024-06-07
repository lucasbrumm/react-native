import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Banners from '../components/Banners'
import FunctionsAccount from '../components/FunctionsAccount'
import { imageUser } from '../common/base64Images'

export default function Home() {
  const [closeMoney, setCloseMoney] = useState<boolean>(false)
  const [balance, setBalance] = useState<string>('589,48')
  return (
    <View style={styles.containerAutenticado}>
      <StatusBar backgroundColor='#820ad1' barStyle='light-content'></StatusBar>

      <View style={styles.header}>
        <View style={styles.imageAndOptions}>
          <Image
            style={styles.imageUser}
            source={{
              uri: imageUser,
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
              <FontAwesome name='question-circle' size={25} color={'#FFF'} />
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

      <ScrollView style={{ backgroundColor: 'red' }}>
        <View style={styles.accountPadding}>
          <TouchableOpacity style={styles.accountContainer}>
            <View style={styles.textAccountContainer}>
              <Text style={styles.textAccount}>Conta</Text>
              <Text style={styles.textAccount}>{`R$ ${balance}`}</Text>
            </View>
            <FontAwesome name='angle-right' size={15} color={'black'} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FunctionsAccount />
        </ScrollView>

        <View style={styles.myCardsContainer}>
          <TouchableOpacity style={styles.myCards}>
            <FontAwesome name='credit-card' size={15} color={'black'} />
            <Text>Meus cartões</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bannerContainer}>
          <View style={styles.banners}>
            <Banners />
          </View>
        </View>
      </ScrollView>
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
