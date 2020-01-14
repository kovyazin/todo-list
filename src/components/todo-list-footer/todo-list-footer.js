import React from 'react'

const TodoListFooter = () => {
  return (
    <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
      <label className="mb-0">
        <input type="checkbox" />
        &nbsp;Check All
      </label>
      <span>0 items left</span>
    </li>
  )
}

export default TodoListFooter
