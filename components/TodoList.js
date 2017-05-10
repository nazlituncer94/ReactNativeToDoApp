// @flow
// Code that brings together other components 
// Full list of items added 

import React, { Component } from 'react'
import {
  ActivityIndicator,
  View,
  Text,
  ListView,
  StyleSheet,
} from 'react-native'
import autobind from 'autobind-decorator'

import {
  FILTER_TYPES,
  listenForItems,
  filterItems,
  itemEquals,
  updateItem,
  removeItem,
  updateItems,
} from '../utils/data'

import type { // eslint-disable-line no-duplicate-imports
  filterType,
  itemType,
} from '../utils/data'

import Row from './Row'
import Filters from './Filters'

type PropType = {
};

class TodoList extends Component {
  props: PropType
  state: {
    loading: boolean,
    dataSource: Object,
    items: ?Array<itemType>,
    filter: filterType,
  }

  constructor(props: PropType) {
    super(props)

    this.state = {
      loading: true,
      items: null,
      filter: FILTER_TYPES.ALL,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1: itemType, row2: itemType) => !itemEquals(row1, row2),
      }),
    }
  }

  setSource(items: Array<itemType>, filter: filterType, extraState?: Object) {
    const filteredItems = filterItems(items, filter)
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(filteredItems),
      items,
      ...extraState,
    })
  }

  getActiveItemsCount(): number {
    if (!this.state.items) {
      return 0
    }
    const activeItems = filterItems(this.state.items, FILTER_TYPES.ACTIVE)
    return activeItems.length
  }

  updateItemsWithValue(value: Object) {
    if (!this.state.items) {
      return
    }

    const newItems = this.state.items.map((item: itemType) => ({
      ...item,
      ...value,
    }))

    updateItems(newItems)
  }

  @autobind
  handleItemsChanged(items: Array<itemType>) {
    this.setSource(items, this.state.filter, { loading: false })
  }

  @autobind
  handleRemoveItem(item: itemType) {
    removeItem(item)
  }

  @autobind
  handleToggleComplete(item: itemType) {
    updateItem({
      ...item,
      completed: !item.completed,
    })
  }

  @autobind
  handleToggleAll() {
    const activeCount = this.getActiveItemsCount()
    if (activeCount === 0) {
      this.updateItemsWithValue({ completed: false })
    } else {
      this.updateItemsWithValue({ completed: true })
    }
  }

  @autobind
  handleEditItem(item: itemType, title: string) {
    updateItem({
      ...item,
      title,
    })
  }

  @autobind
  handleFilterChange(filter: filterType) {
    const items = this.state.items
    if (items) {
      this.setSource(
        items, filter, { filter: filter }
      )
    }
  }

  @autobind
  renderItem(item: itemType) {
    return (
      <Row
        key={item.id}
        item={item}
        onEdit={this.handleEditItem}
        onRemove={this.handleRemoveItem}
        onSwitch={this.handleToggleComplete}
      />
    )
  }

  componentDidMount() {
    listenForItems(this.handleItemsChanged)
  }

  render() {
    const loadingComponent = (this.state.loading) ? (
      <ActivityIndicator
        size="large"
        color="#333"
        style={styles.loading}
      />) : null

    const activeCount = this.getActiveItemsCount()
    

    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          
          
        </View>
        {loadingComponent}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem}
          style={styles.listview}
          enableEmptySections
        />
        {(this.state.items) ? <Filters
          filter={this.state.filter}
          items={this.state.items}
          onFilterChange={this.handleFilterChange}
        /> : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  labelContainer: {
    marginTop: 0,
    flexDirection: 'row',
  },
  tasksLabel: {
    marginRight: 10,
  },
  
  loading: {
    marginTop: 50,
  },
  listview: {
    flex: 1,
    marginTop: 0,
  },
})

export default TodoList
