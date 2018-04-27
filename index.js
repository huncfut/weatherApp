import React from 'react'
import {AppRegistry, View, Text, ScrollView} from 'react-native'
import Header from './src/Header'
import LocationList from './src/LocationList'

const App = () => {
  return (
    <View style={styles.mainView}>
      <Header title="Weather" />
      <ScrollView>
        <LocationList />
      </ScrollView>
    </View>
  )
}

const styles = {
  mainView: {
    backgroundColor: '#fdeceb',
    flex: 1
  }
}

AppRegistry.registerComponent('weatherApp', () => App)
