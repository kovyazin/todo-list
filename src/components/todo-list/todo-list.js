import React from 'react'
import PropTypes from 'prop-types'

import TodoListItem from '../todo-list-item/todo-list-item'
import TodoListFooter from '../todo-list-footer/todo-list-footer'

const TodoList = ({ todos, toggleItemCompleted, deleteItem }) => {
  return (
    <ul className="list-group">
      {todos.map(({ id, label, completed }) => {
        return (
          <TodoListItem
            key={id}
            label={label}
            completed={completed}
            id={id}
            handleToggle={toggleItemCompleted}
            handleDelete={deleteItem}
          />
        )
      })}
      <TodoListFooter />
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleItemCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default TodoList
