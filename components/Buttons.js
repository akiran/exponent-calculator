import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import * as config from './config'


class BaseButton extends React.Component {
  render() {
    const {backgroundColor} = this.props
    const containerStyle = {
      backgroundColor
    }
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.text]}>
          {this.props.children}
        </Text>
      </View>
    )
  }
}

BaseButton.defaultProps = {
  backgroundColor: '#FFF',
}

export function Button(props) {
  return <BaseButton {...props} />
}

export function OrangeButton(props) {
  return <BaseButton {...props} backgroundColor={config.orange} />
}

export function GrayButton(props) {
  return <BaseButton {...props} backgroundColor={config.gray} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#000'
  },
  text: {
    fontSize: 24
  }
})

