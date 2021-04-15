import { InferProps } from 'prop-types'
import * as React from 'react'
import { Text } from 'react-native'

import withStyledSystem from '../functions/withStyledSystem'

const StyledText = withStyledSystem(Text)

const MyText = (props: InferProps<typeof StyledText.propTypes>) => (
  <StyledText fontSize='md' color='text1' {...props} />
)

MyText.propTypes = StyledText.propTypes

export default MyText
