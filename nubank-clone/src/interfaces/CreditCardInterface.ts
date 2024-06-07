import { CardTypeEnum } from '../enums/CardTypeEnum'

export interface CreditCard {
  id: number
  balanceCard: string
  cards: Card[]
  limitCreditCard: string
  creditCardBill: CreditCardBill
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

export interface CreditCardBill {
  id: number
  value: string
  invoiceDate: Date
}
