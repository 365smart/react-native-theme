import PropTypes, { InferProps } from 'prop-types'
import * as React from 'react'
import { Keyboard, TextInput } from 'react-native'

import withStyledSystem, { ComponentProps } from '../functions/withStyledSystem'
import Text from './Text'

const Error = (props: ComponentProps & { children: any }) => (
  <Text color='danger' textAlign='left' {...props}>
    {props.children}
  </Text>
)

Error.propTypes = {
  children: PropTypes.node,
}

const StyledTextInput = withStyledSystem(TextInput, (p) => {
  const pColor = p.placeholderColor || p.color
  return {
    placeholderTextColor: `${p.theme.colors[pColor]}`,
  }
})

const InputProps = {
  ...StyledTextInput.propTypes,
  /** display an error message below the input */
  error: PropTypes.string,
  /** focus on the input if true */
  focus: PropTypes.bool,
  /** callback function for text changes */
  onChangeText: PropTypes.func,
  /** callback function for input focus */
  onFocus: PropTypes.func,
  /** callback function for input blur */
  onBlur: PropTypes.func,
  /** callback function for submitting editing */
  onSubmitEditing: PropTypes.func,
  /** label text for input */
  label: PropTypes.string,
  /** color for placeholder text */
  placeholderColor: PropTypes.string,
}

const Input = React.forwardRef((props: InferProps<typeof InputProps>, ref) => {
  const onSubmitEditing = () => {
    if (typeof props.onSubmitEditing === 'function') {
      props.onSubmitEditing()
    } else {
      Keyboard.dismiss()
    }
  }

  const onChangeText = (text: string) => {
    if (text.includes('\n')) text = text.replace('\n', '')
    if (typeof props.onChangeText === 'function') {
      props.onChangeText(text)
    }
  }

  const onFocus = () => {
    // setIsFocused(true);
    if (typeof props.onFocus === 'function') {
      props.onFocus()
    }
  }

  const onBlur = () => {
    // setIsFocused(false);
    if (typeof props.onBlur === 'function') {
      props.onBlur()
    }
  }

  return (
    <>
      {props.label && (
        <Text fontSize='md' mb='xxs' color='negative' textAlign='left'>
          {props.label}
        </Text>
      )}
      <StyledTextInput
        innerRef={ref}
        bg='bg3'
        color='text1'
        placeholderColor='negative'
        fontSize='md'
        p='xs'
        borderRadius='md'
        multiline={false}
        numberOfLines={1}
        returnKeyType='done'
        onSubmitEditing={onSubmitEditing}
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
      />
      {props.error && (
        <Text fontSize='md' mt='xxs' color='danger' textAlign='left' {...props}>
          {props.error}
        </Text>
      )}
    </>
  )
})

Input.propTypes = InputProps

export default Input
