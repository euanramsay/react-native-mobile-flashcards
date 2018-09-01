import React, { Component } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { addNewSet } from '../actions/card'
import { styles } from '../utils/styles'

class NewSet extends Component {
  state = {
    title: ''
  }

  handleOnPress = value => {
    if (value.title.length < 1) {
      return Alert.alert(
        'Oh!',
        'Please put a title for your quiz',
        [{ text: 'OK' }],
        { cancelable: false }
      )
    }
    const { title } = this.state
    this.props.addNewSet(value)
    this.props.navigation.navigate('Quiz', { title })
  }

  render () {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <Text>What is the title of your new quiz?</Text>
        <TextInput
          style={styles.input}
          onChangeText={title => this.setState({ title })}
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

export default connect(null, { addNewSet })(NewSet)
