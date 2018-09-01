import React, { Component } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { addNewQuestion } from '../actions/card'
import { styles } from '../utils/styles'

class NewQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleOnPress = value => {
    const { question, answer } = this.state
    const { title } = this.props.navigation.state.params

    if (value.question.length < 1) {
      return Alert.alert(
        'Hey!',
        'You need to put a question.',
        [{ text: 'OK' }],
        { cancelable: false }
      )
    }

    if (value.answer.length < 1) {
      return Alert.alert(
        'You forgot!',
        'You need to put an answer',
        [{ text: 'OK' }],
        { cancelable: false }
      )
    }

    const questionData = {
      title,
      question,
      answer
    }
    this.props.addNewQuestion(questionData)
    this.props.navigation.goBack()
  }

  render () {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <Text>Please add a question...</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          onChangeText={question => this.setState({ question })}
        />
        <Text>Please add an answer...</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          onChangeText={answer => this.setState({ answer })}
        />
        <TouchableOpacity
          style={styles.clickable}
          onPress={() => this.handleOnPress(this.state)}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default connect(null, { addNewQuestion })(NewQuestion)
