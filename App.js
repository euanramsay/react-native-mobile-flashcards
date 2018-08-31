import React from 'react'
import { View} from 'react-native'
import { setLocalNotification } from './utils/helpers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './middleware'
import reducer from './reducers'
import { MainNavigator } from './routes/nav.js'

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
