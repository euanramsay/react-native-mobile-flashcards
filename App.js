import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

function Home () {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
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
    screen: Home
  },
  CreateQuiz: {
    screen: CreateQuiz
  },
  Settings: {
    screen: Settings
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
