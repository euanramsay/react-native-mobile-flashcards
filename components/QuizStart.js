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

  render () {
    const { navigation } = this.props
    const { questions } = navigation.state.params
    const { questionNumber, toggleAnswer, score } = this.state
    if (questionNumber < questions.length) {
      return (
        <View style={styles.container}>
          {toggleAnswer
            ? <View style={styles.container}>
              <Text>The answer is:</Text>
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
                <Text>I was correct!</Text>
              </TouchableOpacity>
              <Text>or</Text>
              <TouchableOpacity
                style={styles.cancel}
                onPress={() =>
                    this.setState(prevState => ({
                      toggleAnswer: !prevState.toggleAnswer,
                      questionNumber: prevState.questionNumber + 1
                    }))}
                >
                <Text>I was unlucky</Text>
              </TouchableOpacity>
            </View>
            : <View style={styles.container}>
              <Text>The question is:</Text>
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
                <Text>See answer</Text>
              </TouchableOpacity>
            </View>}
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>
            You have finished the quiz with a score of
            {' '}
            {score}
            {' '}
            out of
            {' '}
            {questions.length}!
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
