import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../utils/styles'

class QuizStart extends Component {
  state = {
    score: 0,
    questionNumber: 0,
    toggleAnswer: false
  }

  // TODO: Implement answering of questions and scoring.

  render () {
    const { questions } = this.props.navigation.state.params
    const { navigation } = this.props
    const { questionNumber, toggleAnswer, score } = this.state
    console.log(this.state)
    console.log(questions.length)
    console.log(navigation)
    if (questionNumber < questions.length) {
      return (
        <View style={styles.container}>
          {toggleAnswer
            ? <View>
              <Text>Answer</Text>
              <Text style={styles.heading}>
                {questions[questionNumber].answer}
              </Text>
              <TouchableOpacity
                style={styles.clickable}
                onPress={() =>
                    this.setState(prevState => ({
                      toggleAnswer: !prevState.toggleAnswer,
                      score: prevState.score + 1,
                      questionNumber: prevState.questionNumber + 1
                    }))}
                >
                <Text>Correct?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancel}
                onPress={() =>
                    this.setState(prevState => ({
                      toggleAnswer: !prevState.toggleAnswer,
                      questionNumber: prevState.questionNumber + 1
                    }))}
                >
                <Text>Unlucky?</Text>
              </TouchableOpacity>
            </View>
            : <View>
              <Text style={styles.heading}>
                {questions[questionNumber].question}
              </Text>
              <TouchableOpacity
                style={styles.clickable}
                onPress={() =>
                    this.setState(prevState => ({
                      toggleAnswer: !prevState.toggleAnswer,
                      toggleQuestion: !prevState.toggleQuestion
                    }))}
                >
                <Text>Answer</Text>
              </TouchableOpacity>
            </View>}
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>
            You have finished the quiz with a score of {score}
          </Text>
          <TouchableOpacity
            style={styles.clickable}
            onPress={() => navigation.navigate('Quiz')}
          >
            <Text>Try quiz again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clickable}
            onPress={() => navigation.navigate('Home')}
          >
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

export default connect()(QuizStart)
