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
      previousInput: '',
      operator: '',
      input: ''
    }
    this.addInput = this.addInput.bind(this)
    this.setOperator = this.setOperator.bind(this)
    this.calculateResult = this.calculateResult.bind(this)
    this.clear = this.clear.bind(this)
  }
  addInput(key) {
    this.setState({
      input: this.state.input.concat(key)
    })
  }
  setOperator(operator) {
    this.setState({operator})
  }
  calculateResult() {
    const {previousInput, input, operator} = this.state
    this.setState({
      input: eval(`${previousInput} ${operator} ${input}`),
      previousInput: input
    })
  }
  clear() {
    this.setState({
      previousInput: '',
      operator: '',
      input: ''
    })
  }
  render() {
    const {input,  previousInput, operator} = this.state
    const dirty = input || previousInput || operator
    console.log('dirty', input)
    return (
      <View style={styles.container}>
        <Result 
          value={input} />
        <KeyPad 
          addInput={this.addInput}
          clear={this.clear}
          dirty={dirty} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

