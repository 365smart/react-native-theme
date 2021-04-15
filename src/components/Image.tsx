import { InferProps } from 'prop-types'
import * as React from 'react'
import { Image } from 'react-native'

import withStyledSystem from '../functions/withStyledSystem'

const StyledImage = withStyledSystem(Image)

const ImageProps = {
  ...StyledImage.propTypes,
}

const MyImage = (props: InferProps<typeof ImageProps>) => (
  <StyledImage {...props} />
)

MyImage.propTypes = ImageProps

export default MyImage
