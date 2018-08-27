import { ADD_NEW_CARD, ADD_NEW_DECK } from './types'

export const addNewCard = value => ({
  type: ADD_NEW_CARD,
  value
})

export const addNewDeck = value => ({
  type: ADD_NEW_DECK,
  value
})
