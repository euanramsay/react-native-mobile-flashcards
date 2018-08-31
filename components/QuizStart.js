import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
} from 'react-native'
import { styles } from '../utils/styles'

const QuizStart = props => {
  const { title, questions } = props.navigation.state.params
  console.log(props)
  return (
    <View style={styles.container}>
    
      <Text>Quiz will go here</Text>
    </View>
  )
}

export default connect()(QuizStart)