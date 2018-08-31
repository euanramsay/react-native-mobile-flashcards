import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { styles } from '../utils/styles'

const Quiz = props => {
  const { title, questions } = props.navigation.state.params
  console.log(props)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quiz: {title}</Text>
      <Text>{props.quizLength} cards</Text>
      <TouchableOpacity
        style={styles.clickable}
        onPress={() =>
          props.navigation.navigate('QuizStart', {
            title,
            questions
          })}
      >
        <Text>Start quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.clickable}
        onPress={() => props.navigation.navigate('NewQuestion', { title })}
      >
        <Text>Add new question</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.clickable}
        onPress={() => props.navigation.navigate('Home')}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  quizLength: state.card[ownProps.navigation.state.params.title].quizLength
})

export default connect(mapStateToProps)(Quiz)
