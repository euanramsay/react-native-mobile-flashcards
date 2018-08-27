import React, { Component } from 'react'
import {
  Alert,
  DatePickerIOS,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import styled from 'styled-components'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

const ExplanationText = styled.Text`
  font-size: 20;
  text-align: center;
  padding-top: 10;
  padding-horizontal: 15;
`

class Notifications extends Component {
  constructor (props) {
    super(props)
    this.state = { chosenTime: new Date() }

    this.setTime = this.setTime.bind(this)
  }

  setTime (newTime) {
    this.setState({ chosenTime: newTime })
  }

  render () {
    const displayConfirmNotificationAlert = string => {
      Alert.alert(
        'Notifications',
        `are ${string}`,
        { text: 'OK' },
        { cancelable: false }
      )
    }

    const { chosenTime } = this.state

    return (
      <View>
        <ExplanationText>Set a daily reminder</ExplanationText>
        <DatePickerIOS
          date={chosenTime}
          onDateChange={this.setTime}
          mode='time'
        />
        <TouchableOpacity
          onPress={() =>
            clearLocalNotification()
              .then(setLocalNotification(chosenTime))
              .then(displayConfirmNotificationAlert('activated.'))}
        >
          <Text>Set notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            clearLocalNotification().then(
              displayConfirmNotificationAlert('cancelled.')
            )}
        >
          <Text>Reset notifications</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Notifications
