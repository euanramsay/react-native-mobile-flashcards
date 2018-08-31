import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import Notifications from './components/Notifications'
import { setLocalNotification } from './utils/helpers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './middleware'
import reducer from './reducers'
import NewSet from './components/NewSet'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'

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
      style: {
        height: 56,
        backgroundColor: '#f4d941'
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

const store = createStore(reducer, middleware)

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }
  render () {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4286f4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  clickable: {
    padding: 10,
    margin: 10,
    backgroundColor: '#8cffcd',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    minWidth: 200,
    alignItems: 'center'
  },
  heading: {
    padding: 30,
    fontSize: 20,
    fontWeight: 'bold'
  }
})
