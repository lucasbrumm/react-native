import { CardTypeEnum } from '../enums/CardTypeEnum'

export interface CreditCard {
  id: number
  balanceCard: string
  cards: Card[]
  limitCreditCard: string
  creditCardBill: string
}

interface Card {
  id: number
  cardNumber: number
  cardType: CardType
}

interface CardType {
  id: number
  type: CardTypeEnum
}
