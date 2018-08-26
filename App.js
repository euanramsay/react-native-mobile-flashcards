import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <Ionicons name={'ios-home'} size={100} />
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Text>Press here for the Dashboard</Text>
      </TouchableOpacity>
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

const Tabs = createBottomTabNavigator(
  {
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
        title: 'Add Quiz',
        tabBarLabel: 'Add Quiz',
        tabBarIcon: <Ionicons name='ios-add-circle-outline' size={30} />
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Notifications',
        tabBarLabel: 'Notifications',
        tabBarIcon: <Ionicons name='ios-alarm' size={30} />
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#f44286',
      style: {
        height: 56,
        backgroundColor: '#f4d941',
        shadowColor: '#a39089',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

const Dashboard = () => (
  <View>
    <Text>This is the Dashboard!</Text>
  </View>
)

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Home'
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard'
    }
  }
})

export default class App extends React.Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    )
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
