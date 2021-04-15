import PropTypes, { InferProps } from 'prop-types'
import * as React from 'react'
import { ActivityIndicator } from 'react-native'

import withStyledSystem from '../functions/withStyledSystem'

const StyledActivityIndicator = withStyledSystem(ActivityIndicator)

const ActivityIndicatorProps = {
  ...StyledActivityIndicator.propTypes,
  /** color of the icon from theme */
  color: PropTypes.string,
  /** size of indicator e.g. large */
  indicatorSize: PropTypes.string,
}

const MyActivityIndicator = (
  props: InferProps<typeof ActivityIndicatorProps>
) => <StyledActivityIndicator color='text1' m='md' {...props} />

MyActivityIndicator.propTypes = ActivityIndicatorProps

export default MyActivityIndicator
