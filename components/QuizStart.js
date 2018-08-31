import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../utils/styles'

class QuizStart extends Component {
  state = {
    score: 0,
    questionNumber: 0
  }

  render () {
    const { title, questions } = this.props.navigation.state.params
    const { questionNumber } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{title}</Text>
        <Text>{questions[questionNumber].question}</Text>
        <TouchableOpacity style={styles.clickable} onPress={() => null}>
          <Text>Answer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(QuizStart)
