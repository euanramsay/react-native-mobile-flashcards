import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Notifications from '../components/Notifications'
import NewSet from '../components/NewSet'
import NewQuestion from '../components/NewQuestion'
import Quiz from '../components/Quiz'
import { styles } from '../utils/styles'

function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mobile Flashcards!</Text>
      <Ionicons name='ios-albums' size={50} />
      <TouchableOpacity
        style={styles.clickable}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text>Press here for the Dashboard</Text>
      </TouchableOpacity>
    </View>
  )
}

function CreateQuiz ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create a new Quiz</Text>
      <TouchableOpacity
        style={styles.clickable}
        onPress={() => navigation.navigate('NewSet')}
      >
        <Text>Press here to create new quiz</Text>
      </TouchableOpacity>
    </View>
  )
}

function Settings ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <TouchableOpacity
        style={styles.clickable}
        onPress={() => navigation.navigate('Notifications')}
      >
        <Text>Press here for Notifications</Text>
      </TouchableOpacity>
    </View>
  )
}

const Dashboard = () => (
  <View>
    <Text>This is the Dashboard!</Text>
  </View>
)

export const Tabs = createBottomTabNavigator(
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
      style: {
        height: 56,
        backgroundColor: '#f4d941'
      }
    }
  }
)

export const MainNavigator = createStackNavigator({
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
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: 'Notifications'
    }
  },
  NewSet: {
    screen: NewSet,
    navigationOptions: {
      title: 'Add New'
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: 'New Questions'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
})
