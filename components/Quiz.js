import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../utils/styles'

class Quiz extends Component {
  render () {
    const { questions, navigation } = this.props
    const { title } = navigation.state.params
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Quiz: {title}</Text>
        <Text>
          {questions.length} {questions.length === 1 ? 'card' : 'cards'}
        </Text>
        {questions.length !== 0
          ? <TouchableOpacity
            style={styles.clickable}
            onPress={() =>
                navigation.navigate('QuizStart', {
                  title,
                  questions
                })}
            >
            <Text>Start quiz</Text>
          </TouchableOpacity>
          : null}
        <TouchableOpacity
          style={styles.clickable}
          onPress={() =>
            navigation.navigate('NewQuestion', { title })}
        >
          <Text>Add new question</Text>
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

const mapStateToProps = (state, ownProps) => ({
  questions: state.card[ownProps.navigation.state.params.title].questions
})

export default connect(mapStateToProps)(Quiz)
