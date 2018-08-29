import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    this.renderItemList = ({ item }) => {
      const { title, questions } = item
      return (
        <StyledTouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('QuizOverview', {
              title,
              questions
            })}
        >
          <Text>{title}</Text>
          <Text>{questions.length} cards</Text>
        </StyledTouchableOpacity>
      )
    }

    return (
      <View>
        <View>
          <FlatList
            data={this.props.content}
            renderItem={this.renderItemList}
            keyExtractor={item => item.title}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  content: state
})

export default connect(mapStateToProps)(Home)
