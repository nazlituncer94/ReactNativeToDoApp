// @flow

import React from 'react'
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
} from 'react-native'

import TodoList from './components/TodoList'
import AddItem from './components/AddItem'

const RNTodoWorkshop = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EEE" barStyle="dark-content" />
      <AddItem />
      <TodoList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default RNTodoWorkshop
