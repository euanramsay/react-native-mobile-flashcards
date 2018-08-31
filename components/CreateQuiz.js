import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../utils/styles'

class CreateQuiz extends Component {
  render () {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Create a new Quiz</Text>
        <TouchableOpacity
          style={styles.clickable}
          onPress={() => navigation.navigate('NewSet')}
        >
          <Text>Press here to create new quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(CreateQuiz)
