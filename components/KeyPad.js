import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import {Button, OrangeButton, GrayButton} from './Buttons'
import Row from './Row'
import * as config from './config'

export default class KeyPad extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Row>
          <GrayButton>AC</GrayButton>
          <GrayButton>+/-</GrayButton>
          <GrayButton>%</GrayButton>
          <OrangeButton borderRight={false}>/</OrangeButton>
        </Row>
        <Row>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <OrangeButton borderRight={false}>X</OrangeButton>
        </Row>
        <Row>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <OrangeButton borderRight={false}>-</OrangeButton>
        </Row>
        <Row>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <OrangeButton borderRight={false}>+</OrangeButton>
        </Row>
        <Row>
          <Button borderRight={false} bottomBorder={false}>0</Button>
          <Button bottomBorder={false}>{''}</Button>
          <Button bottomBorder={false}>.</Button>
          <OrangeButton bottomRight={false} bottomBorder={false}>=</OrangeButton>
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

