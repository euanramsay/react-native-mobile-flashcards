import React, { Component } from 'react'
import {
  Alert,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { addNewDeck } from '../actions/card'

class NewSet extends Component {
  state = {
    title: ''
  }

  handleOnPress = value => {
    if (this.state.title.length < 1) {
      return Alert.alert(
        'You need to put a title for your new set',
        { text: 'OK' },
        { cancelable: false }
      )
    }
    const { title } = this.state
    this.props.addNewDeck(value)
    this.props.navigation.navigate('NewCard', { title })
  }

  render () {
    console.log(this.props)
    return (
      <View>
        <Text>What do you want to call you new question set?</Text>
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
      </View>
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
    borderColor: '#d3d3d3'
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

export default connect(null, { addNewDeck })(NewSet)
