import React, { Component } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../utils/styles'

class Home extends Component {
  render () {
    const { navigation, quiz } = this.props

    this.renderItemList = ({ item }) => {
      const { title, questions } = item
      return (
        <TouchableOpacity
          style={styles.clickable}
          onPress={() =>
            navigation.navigate('Quiz', {
              title,
              questions
            })}
        >
          <Text>{title}</Text>
          <Text>
            {questions.length} {questions.length === 1 ? 'card' : 'cards'}
          </Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Mobile Flashcards!</Text>
        <FlatList
          data={quiz}
          renderItem={this.renderItemList}
          keyExtractor={item => item.title}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  quiz: Object.keys(state.card).map(key => ({
    title: state.card[key].title,
    questions: state.card[key].questions
  }))
})

export default connect(mapStateToProps)(Home)
