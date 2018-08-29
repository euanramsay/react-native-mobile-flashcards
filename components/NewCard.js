import React, { Component } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { addNewCard } from '../actions/card'

class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleOnPress = () => {
    const { question, answer } = this.state
    const { title } = this.props.navigation.state.params

    if (question.length < 1) {
      return Alert.alert(
        'You need to put a question.',
        { text: 'OK' },
        { cancelable: false }
      )
    }

    if (answer.length < 1) {
      return Alert.alert(
        'You need to put an answer',
        { text: 'OK' },
        { cancelable: false }
      )
    }

    const value = {
      title,
      question,
      answer
    }
    this.props.addNewCard(value)
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
        <Text>Please add answer...</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4286f4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  clickable: {
    padding: 10,
    margin: 10,
    backgroundColor: '#8cffcd',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    minWidth: 200,
    alignItems: 'center'
  },
  heading: {
    padding: 30,
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    padding: 10,
    margin: 10,
    height: 50,
    minWidth: 250,
    backgroundColor: '#dbfdff',
    borderWidth: 1,
    borderColor: '#0f0f0f'
  }
})

export default connect(null, { addNewCard })(NewCard)
