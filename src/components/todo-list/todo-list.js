import React from 'react'
import PropTypes from 'prop-types'

import TodoListItem from '../todo-list-item/todo-list-item'
import TodoListFooter from '../todo-list-footer/todo-list-footer'

const TodoList = ({
  todos,
  toggleItemCompleted,
  toggleAllItemsCompleted,
  deleteItem,
  isCompletedAllItems
}) => {
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
      <TodoListFooter
        todos={todos}
        isCompletedAllItems={isCompletedAllItems}
        toggleAllItemsCompleted={toggleAllItemsCompleted}
      />
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleItemCompleted: PropTypes.func.isRequired,
  toggleAllItemsCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  isCompletedAllItems: PropTypes.bool.isRequired
}

export default TodoList
