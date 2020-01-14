import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Search from '../search/search'
import TodoList from '../todo-list/todo-list'
import FilterBar from '../filter-bar/filter-bar'

const todoData = [
  { id: 1, label: 'My first todo', completed: false },
  { id: 2, label: 'My second todo', completed: false },
  { id: 3, label: 'My third todo', completed: false },
  { id: 4, label: 'My new todo todo', completed: false }
]

const App = () => {
  const [todos, setTodos] = useState(todoData)
  const [filter, setFilter] = useState('all')
  const isCompletedAllItems = todos.every(({ completed }) => completed)

  const toggleItemCompleted = id => {
    setTodos(
      todos.map(item =>
        item.id !== id ? item : { ...item, completed: !item.completed }
      )
    )
  }

  const toggleAllItemsCompleted = () => {
    setTodos(todos.map(item => ({ ...item, completed: !isCompletedAllItems })))
  }

  const deleteItem = id => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const deleteCompletedItems = () => {
    setTodos(todos.filter(item => !item.completed))
  }

  const addItem = label => {
    setTodos([...todos, { id: Date.now(), completed: false, label }])
  }

  const filterItems = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter(item => !item.completed)
      case 'completed':
        return items.filter(item => item.completed)
      default:
        return items
    }
  }

  const visibleItems = filterItems(todos, filter)

  return (
    <div className="pt-5">
      <div className="container">
        <h1 className="font-weight-bold mb-3">Todo List</h1>
        <div className="mb-3">
          <Search addItem={addItem} />
        </div>
        {!!todos.length && (
          <TodoBody
            todos={visibleItems}
            toggleItemCompleted={toggleItemCompleted}
            deleteItem={deleteItem}
            isCompletedAllItems={isCompletedAllItems}
            toggleAllItemsCompleted={toggleAllItemsCompleted}
            deleteCompletedItems={deleteCompletedItems}
            handleFilter={setFilter}
            filter={filter}
          />
        )}
        {!todos.length && (
          <h2 className="text-center mt-5">
            Todo list is still empty. <br />
            Please, add your first todo item.
          </h2>
        )}
      </div>
    </div>
  )
}

const TodoBody = ({
  todos,
  toggleItemCompleted,
  deleteItem,
  isCompletedAllItems,
  toggleAllItemsCompleted,
  deleteCompletedItems,
  handleFilter,
  filter
}) => {
  return (
    <>
      <div className="mb-3">
        <TodoList
          todos={todos}
          toggleItemCompleted={toggleItemCompleted}
          deleteItem={deleteItem}
          isCompletedAllItems={isCompletedAllItems}
          toggleAllItemsCompleted={toggleAllItemsCompleted}
        />
      </div>
      <FilterBar
        deleteCompletedItems={deleteCompletedItems}
        handleFilter={handleFilter}
        filter={filter}
      />
    </>
  )
}

TodoBody.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleItemCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  isCompletedAllItems: PropTypes.bool.isRequired,
  toggleAllItemsCompleted: PropTypes.func.isRequired,
  deleteCompletedItems: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default App
