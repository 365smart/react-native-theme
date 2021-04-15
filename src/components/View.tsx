import PropTypes, { InferProps } from 'prop-types'
import * as React from 'react'
import { View } from 'react-native'

import withStyledSystem from '../functions/withStyledSystem'

const StyledView = withStyledSystem(View)

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}

const ViewProps = {
  ...StyledView.propTypes,
  /** has a shadow if true */
  hasShadow: PropTypes.bool,
}

const MyView = (props: InferProps<typeof ViewProps>) => {
  return (
    <StyledView style={props.hasShadow && shadowStyle} {...props}>
      {props.children}
    </StyledView>
  )
}

MyView.propTypes = ViewProps

export default MyView
