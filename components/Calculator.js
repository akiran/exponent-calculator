import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class Calculator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>calc</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

