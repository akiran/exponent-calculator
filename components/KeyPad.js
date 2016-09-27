import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import {Button, OrangeButton, GrayButton} from './Buttons'
import Row from './Row'
// import * as config from './config'

export default class KeyPad extends React.Component {
  render() {
    const {dirty, clear, addInput} = this.props
    return (
      <View style={styles.container}>
        <Row>
          <GrayButton onPress={clear}>{dirty ? 'C': 'AC'}</GrayButton>
          <GrayButton>+/-</GrayButton>
          <GrayButton>%</GrayButton>
          <OrangeButton>/</OrangeButton>
        </Row>
        <Row>
          <Button onPress={addInput.bind(null, 7)}>7</Button>
          <Button onPress={addInput.bind(null, 8)}>8</Button>
          <Button onPress={addInput.bind(null, 9)}>9</Button>
          <OrangeButton>X</OrangeButton>
        </Row>
        <Row>
          <Button onPress={addInput.bind(null, 4)}>4</Button>
          <Button onPress={addInput.bind(null, 5)}>5</Button>
          <Button onPress={addInput.bind(null, 6)}>6</Button>
          <OrangeButton>-</OrangeButton>
        </Row>
        <Row>
          <Button onPress={addInput.bind(null, 1)}>1</Button>
          <Button onPress={addInput.bind(null, 2)}>2</Button>
          <Button onPress={addInput.bind(null, 3)}>3</Button>
          <OrangeButton>+</OrangeButton>
        </Row>
        <Row>
          <Button onPress={addInput.bind(null, 0)}>0</Button>
          <Button>{''}</Button>
          <Button>.</Button>
          <OrangeButton>=</OrangeButton>
        </Row>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2
  }
})

