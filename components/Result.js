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
        <Text>{this.props.value}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

