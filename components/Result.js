import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'


export default class Result extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>{this.props.value}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  resultText: {
    color: '#FFF',
    fontSize: 34
  }
})

