import { ScrollView, StatusBar, View } from 'react-native'
import { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Banners from '../components/Banners'
import FunctionsAccount from '../components/FunctionsAccount'
import { User } from '../interfaces/UserInterface'
import { getUser } from '../services/user'
import Emprestimo from '../components/Emprestimo'
import ProximoPagamento from '../components/ProximoPagamento'
import DescubraMais from '../components/DescubraMais'
import CreditCardComponent from '../components/CreditCardComponent'
import AccountBalance from '../components/AccountBalance'
import MyCards from '../components/MyCards'
import Header from '../components/Header'

export default function Home() {
  const [user, setUser] = useState<User>(getUser())
  const [closeValues, setCloseValues] = useState<boolean>(false)

  const showPassword = () => {
    return closeValues ? (
      <FontAwesome name='eye' size={25} color={'#FFF'} />
    ) : (
      <FontAwesome name='eye-slash' size={25} color={'#FFF'} />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor='#820ad1' barStyle='light-content'></StatusBar>

      <Header
        user={user}
        closeValues={closeValues}
        setCloseValues={setCloseValues}
        showPassword={showPassword}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* account card*/}
        <AccountBalance account={user.account} closeValues={closeValues} />

        {/* functions account */}
        <FunctionsAccount />

        {/* card meus cartoes */}
        <MyCards />

        {/* card banners */}
        <Banners
          balance={user?.moneyLoan.loanLimit}
          closeValues={closeValues}
        />
        {/* creditCard */}
        <CreditCardComponent
          creditCard={user.creditCard}
          closeValues={closeValues}
        />

        {/* card empréstimo */}
        <Emprestimo moneyLoan={user.moneyLoan} closeValues={closeValues} />

        {/* Proximo pagamento */}
        <ProximoPagamento
          invoiceDate={user.creditCard.creditCardBill.invoiceDate}
        />

        {/* Descubra mais */}
        <DescubraMais />
      </ScrollView>
    </View>
  )
}
