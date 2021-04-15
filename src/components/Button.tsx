import PropTypes, { InferProps } from 'prop-types'
import * as React from 'react'
import { Pressable } from 'react-native'

import withStyledSystem from '../functions/withStyledSystem'
import Text from './Text'

const StyledPressable = withStyledSystem(Pressable)

const ButtonProps = {
  ...StyledPressable.propTypes,
  /** disable the button */
  disabled: PropTypes.bool,
  /** callback function when pressed */
  onPress: PropTypes.func,
  /** link to route when pressed */
  to: PropTypes.string,
  /** no shadow for the button */
  noShadow: PropTypes.bool,
}

const Button = (props: InferProps<typeof ButtonProps>) => {
  const [pressed, setPressed] = React.useState(false)
  const onPress = () => {
    if (props.disabled) return
    if (typeof props.onPress === 'function') {
      props.onPress()
    }
  }
  const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    opacity: props.disabled ? 0.5 : 1,
  }
  return (
    <StyledPressable
      style={props.noShadow ? {} : shadowStyle}
      textAlign='center'
      justifyContent='center'
      alignItems='center'
      color='white'
      borderRadius='md'
      fontSize='md'
      opacity={pressed ? 0.5 : 1}
      {...props}
      bg={props.disabled ? 'negative' : props.bg}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
    >
      {typeof props.children !== 'string' ? (
        props.children
      ) : (
        <Text
          textAlign='center'
          fontSize={props.fontSize || 'md'}
          color={props.color || 'white'}
        >
          {props.children}
        </Text>
      )}
    </StyledPressable>
  )
}

Button.propTypes = ButtonProps

export default Button
