import PropTypes, { InferProps } from 'prop-types'
import * as React from 'react'
import { FlatList } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'

import withStyledSystem from '../functions/withStyledSystem'
import View from './View'

const StyledSwipeList = withStyledSystem(SwipeListView, (p) => ({
  rightOpenValue: p.rightOpenValue
    ? p.theme.space[p.rightOpenValue] || p.rightOpenValue
    : 0,
  leftOpenValue: p.leftOpenValue
    ? p.theme.space[p.leftOpenValue] || p.leftOpenValue
    : 0,
}))

const StyledFlatList = withStyledSystem(FlatList)

const ListProps = {
  /** render list of data */
  data: PropTypes.array,
  /** render list of elements */
  children: PropTypes.node,
  /** space items horziontally */
  horizontal: PropTypes.node,
  /** add space between items if true */
  space: PropTypes.bool,
  /** callback function extract keys */
  keyExtractor: PropTypes.func,
  /** callback function to render an item */
  renderItem: PropTypes.func,
  /** callback function to render a hidden item */
  renderHiddenItem: PropTypes.func,
  /** rightOpenValue to render a hidden item */
  rightOpenValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** leftOpenValue to render a hidden item */
  leftOpenValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** display list with numColumns */
  numColumns: PropTypes.number,
}

const List = (props: InferProps<typeof ListProps>) => {
  const data: any = props.children || props.data
  const size = data ? data.length : 0
  const renderItem = ({ item, index, separators }: any) => {
    let p: any = {}
    let pKey = props.horizontal ? 'pl' : 'pt'
    if (p.space && index > 0) p[pKey] = 'xs'
    // console.log('index', index, p, item)
    if (typeof props.renderItem === 'function') {
      item = props.renderItem({ item, index, separators })
    }
    if (props.numColumns) {
      p.flex = 1 / props.numColumns
    }
    if (index + 1 === size) {
      p.mb = 'md' // add margin to bottom
    }
    if (typeof item === 'object' && item.type) {
      return <View {...p}>{item}</View>
    }
  }
  const renderHiddenItem = ({ item, index, separators }: any) => {
    let p: any = {}
    let pKey = props.horizontal ? 'pl' : 'pt'
    if (p.space && index > 0) p[pKey] = 'xs'
    // console.log('index', index, p, item)
    if (typeof props.renderHiddenItem === 'function') {
      item = props.renderHiddenItem({ item, index, separators })
    } else {
      return <View />
    }
    if (typeof item === 'object' && item.type) {
      return <View {...p}>{item}</View>
    }
  }
  const keyExtractor = (
    _item: { id: null },
    index: { toString: () => any }
  ) => {
    if (typeof props.keyExtractor === 'function') {
      return props.keyExtractor(_item, index)
    }
    if (typeof _item === 'object' && _item.id !== null) {
      return _item.id
    }
    return index.toString()
  }
  const StyledList = props.renderHiddenItem ? StyledSwipeList : StyledFlatList
  return (
    <StyledList
      {...props}
      {...{
        data,
        keyExtractor,
        renderItem,
        renderHiddenItem,
      }}
    />
  )
}

List.propTypes = ListProps

export default List
