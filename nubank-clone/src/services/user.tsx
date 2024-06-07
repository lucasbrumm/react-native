import { imageUser } from '../common/base64Images'
import { CardTypeEnum } from '../enums/CardTypeEnum'
import { User } from '../interfaces/UserInterface'

export function getUser(): User {
  const user: User = {
    id: 1,
    cpf: '123.456.789-00',
    imageUser: imageUser,
    name: 'Lucas',
    email: 'lucas@example.com',
    account: {
      id: 1,
      balance: '589,45',
      agency: '001',
      accountNumber: '12345-6',
    },
    creditCard: {
      id: 1,
      balanceCard: '500,85',
      cards: [
        {
          id: 1,
          cardNumber: 12345678910,
          cardType: {
            id: 1,
            type: CardTypeEnum.Fisico,
          },
        },
      ],
      limitCreditCard: '2000,00',
      creditCardBill: '858,00',
    },
    moneyLoan: {
      id: 1,
      loanLimit: '10000,00',
    },
  }
  return user
}
