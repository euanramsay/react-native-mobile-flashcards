import { ADD_NEW_CARD, ADD_NEW_DECK } from '../actions/types'
import { initialDeckData } from '../utils/initialDeckData'


const card = (state = initialDeckData, action) => {
  switch (action.type) {
    case ADD_NEW_CARD:
      return {
        ...state,
        [action.value.title]: {
          title: state[action.value.title].title,
          quizLength: state[action.value.title].quizLength + 1,
          questions: [
            ...state[action.value.title].questions,
            {
              question: action.value.question,
              answer: action.value.answer
            }
          ]
        }
      }
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.value.title]: {
          ...action.value,
          quizLength: 0,
          questions: []
        }
      }
    default:
      return state
  }
}

export default card
