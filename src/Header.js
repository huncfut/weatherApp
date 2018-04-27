import React from 'react'
import {View, Text} from 'react-native'

const Header = (props) => (
  <View style={styles.viewStyle}>
    <Text style={styles.titleStyle}>{props.title}</Text>
  </View>
)

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: '#ef7c7a',
    paddingTop: 16
  },
  titleStyle: {
    fontSize: 26
  }
}

export default Header
