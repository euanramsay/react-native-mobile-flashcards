import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import Notifications from '../components/Notifications'
import NewSet from '../components/NewSet'
import NewQuestion from '../components/NewQuestion'
import Quiz from '../components/Quiz'
import Home from '../components/Home'
import Settings from '../components/Settings'
import CreateQuiz from '../components/CreateQuiz'
import QuizStart from '../components/QuizStart'

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
  },
  QuizStart: {
    screen: QuizStart,
    navigationOptions: {
      title: 'QuizStart'
    }
  }
})
