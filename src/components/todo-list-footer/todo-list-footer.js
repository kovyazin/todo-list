import React from 'react'
import PropTypes from 'prop-types'

const TodoListFooter = ({
  todos,
  isCompletedAllItems,
  toggleAllItemsCompleted
}) => {
  const uncompletedItemsLength = todos.filter(({ completed }) => !completed)
    .length

  return (
    <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
      <label className="mb-0">
        <input
          type="checkbox"
          checked={isCompletedAllItems}
          onChange={toggleAllItemsCompleted}
        />
        &nbsp;Check All
      </label>
      <span>{uncompletedItemsLength} items left</span>
    </li>
  )
}

TodoListFooter.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  isCompletedAllItems: PropTypes.bool.isRequired,
  toggleAllItemsCompleted: PropTypes.func.isRequired
}

export default TodoListFooter
