import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useEffect, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Banners from '../components/Banners'
import FunctionsAccount from '../components/FunctionsAccount'
import { imageUser } from '../common/base64Images'
import { User } from '../interfaces/UserInterface'
import { CardTypeEnum } from '../enums/CardTypeEnum'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { getUser } from '../services/user'
import CreditCard from '../components/CreditCard'
import Emprestimo from '../components/Emprestimo'
import ProximoPagamento from '../components/ProximoPagamento'
import DescubraMais from '../components/DescubraMais'

export default function Home() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.isAuthenticated
  )

  const [user, setUser] = useState<User>(getUser())

  const [closeMoney, setCloseMoney] = useState<boolean>(false)

  const returnShowMoney = () => {
    const dots = new Array(4).fill(0)
    return dots.map((_, index) => {
      return (
        <View
          key={index}
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'black',
            margin: 2,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>.</Text>
        </View>
      )
    })
  }

  const showPassword = () => {
    return closeMoney ? (
      <FontAwesome name='eye' size={25} color={'#FFF'} />
    ) : (
      <FontAwesome name='eye-slash' size={25} color={'#FFF'} />
    )
  }

  return (
    <View style={styles.containerAutenticado}>
      <StatusBar backgroundColor='#820ad1' barStyle='light-content'></StatusBar>

      <View style={styles.header}>
        <View style={styles.imageAndOptions}>
          <Image
            style={styles.imageUser}
            source={{
              uri: user?.imageUser,
            }}
          />
          <View style={styles.iconsHeader}>
            <TouchableOpacity onPress={() => setCloseMoney(!closeMoney)}>
              {showPassword()}
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
          <Text style={styles.textUser}>{`Olá, ${user?.name}`}</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.accountPadding}>
          {/* account */}
          <TouchableOpacity style={styles.accountContainer}>
            <View style={styles.textAccountContainer}>
              <Text style={styles.textAccount}>Conta</Text>
              {!closeMoney ? (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingVertical: 5,
                  }}
                >
                  {returnShowMoney()}
                </View>
              ) : (
                <Text style={styles.textAccount}>
                  {`R$ ${user?.account.balance}`}
                </Text>
              )}
            </View>
            <FontAwesome name='angle-right' size={15} color={'black'} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FunctionsAccount />
        </ScrollView>

        {/* card meus cartoes */}
        <View style={styles.myCardsContainer}>
          <TouchableOpacity style={styles.myCards}>
            <FontAwesome name='credit-card' size={15} color={'black'} />
            <Text>Meus cartões</Text>
          </TouchableOpacity>
        </View>

        {/* card banners */}
        <View style={styles.bannerContainer}>
          <View style={styles.banners}>
            <Banners balance={user?.moneyLoan.loanLimit} />
          </View>
        </View>

        {/* creditCard */}
        <TouchableOpacity style={styles.cardCreditCard}>
          <CreditCard />
        </TouchableOpacity>

        {/* card empréstimo */}
        <TouchableOpacity style={styles.cardCreditCard}>
          <Emprestimo />
        </TouchableOpacity>

        {/* Proximo pagamento */}
        <TouchableOpacity style={styles.cardCreditCard}>
          <ProximoPagamento />
        </TouchableOpacity>

        {/* Descubra mais */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <DescubraMais />
        </ScrollView>
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
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  banners: {
    backgroundColor: '#e6e6e6',
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    borderRadius: 15,
  },
  cardCreditCard: {
    borderColor: 'gray',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 20,
  },
})
