import PropTypes, { InferProps } from 'prop-types'
import * as React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'

import withStyledSystem from '../functions/withStyledSystem'
import Text from './Text'

const StyledScrollView = withStyledSystem(ScrollView)
const StyledTouchableOpacity = withStyledSystem(TouchableOpacity)

const DropdownProps = {
  ...StyledTouchableOpacity.propTypes,
  /** disable the button */
  disabled: PropTypes.bool,
  /** value of dropdown */
  value: PropTypes.object,
  /** no shadow for the button */
  noShadow: PropTypes.bool,
  /** callback function when pressed */
  onPress: PropTypes.func,
  /** callback function on change value */
  onChange: PropTypes.func,
  /** options  */
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const Dropdown = (props: InferProps<typeof DropdownProps>) => {
  const [showDropdown, setShowDropdown] = React.useState(false)
  const [value, setValue] = React.useState<any>(null)

  React.useEffect(() => {
    setValue(props.value)
  }, [props.value])

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const onPress = () => {
    if (props.disabled) return
    toggleDropdown()
    if (typeof props.onPress === 'function') {
      props.onPress()
    }
  }

  const onChange = (item: any) => {
    setValue(item)
    toggleDropdown()
    if (typeof props.onChange === 'function') {
      props.onChange(item)
    }
  }

  const style = props.noShadow
    ? {}
    : {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }

  const radiusProps = showDropdown
    ? {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }
    : {}

  const placeholder = props.placeholder || 'Select an option'

  return (
    <>
      {props.label && (
        <Text mb='xxs' color='negative' textAlign='left'>
          {props.label}
        </Text>
      )}
      <StyledTouchableOpacity
        style={style}
        p='xs'
        borderRadius='md'
        fontSize='md'
        textAlign='center'
        justifyContent='center'
        alignItems='center'
        bg={props.disabled ? 'negative' : props.bg || 'bg3'}
        {...props}
        {...radiusProps}
        flexDirection='row'
        onPress={onPress}
      >
        <Text
          flex='1'
          textAlign='center'
          fontSize={props.fontSize || 'md'}
          color={props.color || value ? 'text' : 'text3'}
          opacity={showDropdown ? 0.5 : 1}
        >
          {showDropdown
            ? placeholder
            : value && value.name
            ? value.name
            : placeholder}
        </Text>
      </StyledTouchableOpacity>
      {showDropdown && (
        <StyledScrollView
          style={style}
          bg='bg3'
          textAlign='center'
          maxHeight='mdW'
          borderRadius='md'
          borderTopRightRadius={0}
          borderTopLeftRadius={0}
        >
          {props.options.map((item: any) => {
            return (
              <StyledTouchableOpacity
                key={item.id}
                p='xs'
                textAlign='center'
                borderTopWidth={1}
                borderColor='negative'
                bg={value && value.id === item.id ? 'primary' : 'transparent'}
                onPress={() => onChange(item)}
              >
                <Text
                  fontSize='md'
                  textAlign='center'
                  color={props.color || 'text'}
                >
                  {item.name}
                </Text>
              </StyledTouchableOpacity>
            )
          })}
        </StyledScrollView>
      )}
    </>
  )
}

Dropdown.propTypes = DropdownProps

export default Dropdown
