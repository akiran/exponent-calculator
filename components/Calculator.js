import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import KeyPad from './KeyPad'
import Result from './Result'

export default class Calculator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Result value={''}/>
        <KeyPad />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

