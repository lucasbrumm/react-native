import { Account } from './AccountInterface'
import { CreditCard } from './CreditCardInterface'
import { MoneyLoan } from './MoneyLoanInterface'

export interface UserData {
  id: number
  password: string
}
export interface User {
  id: number
  cpf: string
  imageUser: string
  name: string
  email: string
  account: Account
  creditCard: CreditCard
  moneyLoan: MoneyLoan
}
