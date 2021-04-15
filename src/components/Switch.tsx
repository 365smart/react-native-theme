import PropTypes, { InferProps } from 'prop-types'
import * as React from 'react'
import { Switch } from 'react-native'

import withStyledSystem, {
  AttributesProps,
} from '../functions/withStyledSystem'

const StyledSwitch = withStyledSystem(Switch, (p: AttributesProps) => ({
  trackColor: p.theme.colors[p.trackColor] || p.trackColor,
  thumbColor: p.theme.colors[p.thumbColor] || p.thumbColor,
  ios_backgroundColor: p.theme.colors[p.bg] || p.bg,
}))

const SwitchProps = {
  ...StyledSwitch.propTypes,
  /** color of the track from theme */
  trackColor: PropTypes.string,
  /** color of the thumb from theme */
  thumbColor: PropTypes.string,
}

const MySwitch = (props: InferProps<typeof SwitchProps>) => (
  <StyledSwitch
    bg='transparent'
    color='text3'
    trackColor='text3'
    thumbColor='text3'
    m='md'
    {...props}
  />
)

MySwitch.propTypes = SwitchProps

export default MySwitch
