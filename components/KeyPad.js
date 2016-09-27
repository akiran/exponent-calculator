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
    const {dirty, clear, handleInput} = this.props
    return (
      <View style={styles.container}>
        <Row>
          <GrayButton onPress={clear}>{dirty ? 'C': 'AC'}</GrayButton>
          <GrayButton onPress={handleInput.bind(null, '+')}>+/-</GrayButton>
          <GrayButton onPress={handleInput.bind(null, '%')}>%</GrayButton>
          <OrangeButton onPress={handleInput.bind(null, '/')}>/</OrangeButton>
        </Row>
        <Row>
          <Button onPress={handleInput.bind(null, 7)}>7</Button>
          <Button onPress={handleInput.bind(null, 8)}>8</Button>
          <Button onPress={handleInput.bind(null, 9)}>9</Button>
          <OrangeButton onPress={handleInput.bind(null, '*')}>X</OrangeButton>
        </Row>
        <Row>
          <Button onPress={handleInput.bind(null, 4)}>4</Button>
          <Button onPress={handleInput.bind(null, 5)}>5</Button>
          <Button onPress={handleInput.bind(null, 6)}>6</Button>
          <OrangeButton onPress={handleInput.bind(null, '-')}>-</OrangeButton>
        </Row>
        <Row>
          <Button onPress={handleInput.bind(null, 1)}>1</Button>
          <Button onPress={handleInput.bind(null, 2)}>2</Button>
          <Button onPress={handleInput.bind(null, 3)}>3</Button>
          <OrangeButton onPress={handleInput.bind(null, '+')}>+</OrangeButton>
        </Row>
        <Row>
          <Button onPress={handleInput.bind(null, 0)}>0</Button>
          <Button>{''}</Button>
          <Button onPress={handleInput.bind(null, '.')}>.</Button>
          <OrangeButton onPress={handleInput.bind(null, '=')}>=</OrangeButton>
        </Row>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 3
  }
})

