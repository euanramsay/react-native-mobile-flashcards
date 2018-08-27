import React, { Component } from 'react'
import {
  Alert,
  DatePickerIOS,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

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

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center'
      },
      centre: {
        padding: 10,
        alignItems: 'center'
      },
      confirm: {
        padding: 10,
        margin: 5,
        backgroundColor: '#8cffcd',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d3d3d3'
      },
      cancel: {
        padding: 10,
        margin: 5,
        backgroundColor: '#ff99ab',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d3d3d3'
      },
      heading: {
        padding: 30,
        fontSize: 20
      }
    })

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
