import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import * as config from './config'


class BaseButton extends React.Component {
  render() {
    const {backgroundColor, onPress} = this.props
    const containerStyle = {
      backgroundColor
    }
    return (
      <View style={[styles.container, containerStyle]}>
        <TouchableHighlight style={styles.button} onPress={onPress}>
          <Text style={[styles.buttonText]}>
            {this.props.children}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

BaseButton.defaultProps = {
  backgroundColor: '#FFF'
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
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#000'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24
  }
})

