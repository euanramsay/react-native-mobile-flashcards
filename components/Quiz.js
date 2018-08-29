import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const Quiz = props => {
  const { title, questions } = props.navigation.state.params
  console.log(props)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quiz: {title}</Text>
      <Text>{props.quizLength} cards</Text>
      <TouchableOpacity
        style={styles.clickable}
        onPress={() =>
          props.navigation.navigate('QuizStart', {
            title,
            questions
          })}
      >
        <Text>Start quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.clickable}
        onPress={() => props.navigation.navigate('NewCard', { title })}
      >
        <Text>Add new question</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.clickable}
        onPress={() => props.navigation.navigate('Home')}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
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
  }
})

const mapStateToProps = (state, ownProps) => ({
  quizLength: state.card[ownProps.navigation.state.params.title].quizLength
})

export default connect(mapStateToProps)(Quiz)
