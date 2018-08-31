import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../utils/styles'

const Quiz = props => {
  const { title, questions } = props.navigation.state.params
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quiz: {title}</Text>
      <Text>
        {questions.length} {questions.length === 1 ? 'card' : 'cards'}
      </Text>
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

export default connect()(Quiz)
