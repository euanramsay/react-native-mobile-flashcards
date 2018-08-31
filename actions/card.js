import { ADD_NEW_QUESTION, ADD_NEW_SET } from './types'

export const addNewQuestion = value => ({
  type: ADD_NEW_QUESTION,
  value
})

export const addNewSet = value => ({
  type: ADD_NEW_SET,
  value
})
