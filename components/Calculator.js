import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import KeyPad from './KeyPad'
import Result from './Result'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prevInput: 0,
      input: 0,
      operator: '',
      action: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.clear = this.clear.bind(this)
  }
  handleNumber(key) {
    const {input, action} = this.state
    this.setState({
      input: action === 'number' ? input*10 + key : key,
      action: 'number'
    })
  }
  handleOperand(key) {
    let {prevInput, input, operator} = this.state
    this.setState({
      operator: key,
      prevInput: input,
      action: 'operand'
    })
  }
  calculateResult() {
    let {prevInput, input, operator, action} = this.state
    if (!operator) {
      return
    }
    
    this.setState({
      prevInput: action === 'result' ? prevInput : input,
      input: action === 'result' ?  eval(`${input} ${operator} ${prevInput}`): eval(`${prevInput} ${operator} ${input}`),
      action: 'result'
    })
  }
  handleInput(key) {
    if (typeof key === 'number') {
      this.handleNumber(key)
    } else if (key === '=') {
      this.calculateResult()
    } else {
      this.handleOperand(key)
    }
  }
  clear() {
    this.setState({
      prevInput: 0,
      operator: '',
      input: 0
    })
  }
  render() {
    const {input,  prevInput, operator} = this.state
    const dirty = input || prevInput || operator
    console.log('state', this.state)
    return (
      <View style={styles.container}>
        <Result 
          value={input} 
        />
        <KeyPad 
          handleInput={this.handleInput}
          clear={this.clear}
          dirty={dirty} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

