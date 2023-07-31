import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import RootNavigator from './src/routes/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { store } from './src/redux/store'
import { firebase } from '@react-native-firebase/auth'

firebase.initializeApp

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})