interface User {
  id: number
  cpf: string
  nome: string
  email: string
  account: Account
  creditCard: CreditCard
  moneyLoan: MoneyLoan
}

interface Account {
  id: number
  balance: string
  agency: string
  accountNumber: string
}

interface CreditCard {
  id: number
  cardNumber: number
  cardType: boolean
  limitCreditCard: string
  creditCardBill: string
}

interface MoneyLoan {
  id: number
  loanLimit: string
}
