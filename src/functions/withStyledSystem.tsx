import * as React from 'react'
import styled from 'styled-components/native'
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system'

import StyledSystemPropTypes, {
  ColorsPropTypes,
  ScaledPropTypes,
} from '../constants/StyledSystemPropTypes'
import { ScaledValuesKeys, ThemeType } from '../theme'
import { ColorsEnum } from '../theme/colors/Light'

export type AttributesProps = {
  theme: ThemeType
  [key: string]: any
}
type AttributesFunction = (props: AttributesProps) => { [key: string]: any }

type ScaledKeys = keyof typeof ScaledPropTypes
type ScaledProps = {
  [key in ScaledKeys]: ScaledValuesKeys
}
type ColorsValues = keyof typeof ColorsEnum
type ColorsKeys = keyof typeof ColorsPropTypes
type ColorsProps = {
  [key in ColorsKeys]: ColorsValues
}

export type ComponentProps = { innerRef?: React.ForwardedRef<unknown> } & (
  | ScaledProps
  | ColorsProps
  | { [key: string]: any }
)

const withStyledSystem = (
  Component: any,
  attrs: AttributesFunction = () => ({})
) => {
  const StyledComponent = styled(Component).attrs(attrs)`
    ${flexbox}
    ${space}
    ${color}
    ${border}
    ${typography}
    ${layout}
    ${shadow}
    ${grid}
    ${position}
    ${background}
  `
  const MyComponent = (props: ComponentProps) => (
    <StyledComponent {...props} ref={props.innerRef} />
  )

  MyComponent.propTypes = {
    ...StyledSystemPropTypes,
    ...Component.propTypes,
  }

  return MyComponent
}

export default withStyledSystem
