import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

function Home () {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <Ionicons name={'ios-home'} size={100} />
    </View>
  )
}

function CreateQuiz () {
  return (
    <View style={styles.container}>
      <Text>CREATE QUIZ</Text>
    </View>
  )
}

function Settings () {
  return (
    <View style={styles.container}>
      <Text>SETTINGS</Text>
    </View>
  )
}

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: <Ionicons name='ios-home' size={30} />
    }
  },
  CreateQuiz: {
    screen: CreateQuiz,
    navigationOptions: {
      tabBarLabel: 'Add Quiz',
      tabBarIcon: <Ionicons name='ios-add-circle-outline' size={30} />
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Notifications',
      tabBarIcon: <Ionicons name='ios-alarm' size={30} />
    }
  }
})

export default class App extends React.Component {
  render () {
    return <Tabs />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4286f4',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
