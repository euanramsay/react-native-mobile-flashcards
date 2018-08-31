import React, { Component } from 'react'
import {
  Alert,
  DatePickerIOS,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { styles } from '../utils/styles'

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
      <View style={styles.container}>
        <View style={styles.centre}>
          <Text style={styles.heading}>Set a daily reminder</Text>
        </View>
        <DatePickerIOS
          date={chosenTime}
          onDateChange={this.setTime}
          mode='time'
        />
        <View style={styles.centre}>
          <TouchableOpacity
            style={styles.confirm}
            onPress={() =>
              clearLocalNotification()
                .then(setLocalNotification(chosenTime))
                .then(displayConfirmNotificationAlert('activated.'))}
          >
            <Text>Set notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() =>
              clearLocalNotification().then(
                displayConfirmNotificationAlert('cancelled.')
              )}
          >
            <Text>Cancel notification</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Notifications
