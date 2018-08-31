import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../utils/styles'

class Settings extends Component {
  render () {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Settings</Text>
        <TouchableOpacity
          style={styles.clickable}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Text>Press here for notifications</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(Settings)
