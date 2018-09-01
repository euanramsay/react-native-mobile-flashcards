import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../utils/styles'

class Answer extends Component {
  render () {
    const { questions, questionNumber } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{questions[questionNumber].answer}</Text>
        <TouchableOpacity
          style={styles.clickable}
          onPress={() => goToNextQuestion(questionNumber)}
        >
          <Text>Correct?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(Answer)
