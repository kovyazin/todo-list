import React, { useState } from 'react'

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

  const toggleItemCompleted = id => {
    setTodos(
      todos.map(item =>
        item.id !== id ? item : { ...item, completed: !item.completed }
      )
    )
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
        <div className="mb-3">
          <TodoList
            todos={visibleItems}
            toggleItemCompleted={toggleItemCompleted}
            deleteItem={deleteItem}
          />
        </div>
        <FilterBar
          deleteCompletedItems={deleteCompletedItems}
          handleFilter={setFilter}
          filter={filter}
        />
      </div>
    </div>
  )
}

export default App
