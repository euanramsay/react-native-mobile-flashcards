import { ADD_NEW_QUESTION, ADD_NEW_SET } from '../actions/types'
import { initialSetData } from '../utils/initialSetData'


const card = (state = initialSetData, action) => {
  switch (action.type) {
    case ADD_NEW_QUESTION:
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
    case ADD_NEW_SET:
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
