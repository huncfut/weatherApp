import React from 'react'
import {View, Text} from 'react-native'

const LocationView = ({station}) => {
  console.log(new Date())
  return (
    <View style={styles.viewStyle}>
      <Text>{station.name}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  }
}

export default LocationView
