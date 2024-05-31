import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyProduct from './src/screen/MyProduct'
import { Provider } from 'react-redux'
import { Store } from './src/redux/Store'
import Navigator from './src/routes/Navigator'

const App = () => {
  return (
    <Provider store={Store}>
      <Navigator/>
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
