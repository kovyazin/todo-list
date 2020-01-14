import React from 'react'
import PropTypes from 'prop-types'

import './todo-list-item.scss'

const TodoListItem = ({ label, completed, id, handleToggle, handleDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <label className="flex-grow-1 mb-0 mr-5 text-truncate">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleToggle(id)}
          className="mr-2"
        />
        <span className={completed ? 'item-completed' : ''}>{label}</span>
      </label>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => handleDelete(id)}
      >
        <i className="far fa-trash-alt" />
      </button>
    </li>
  )
}

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default TodoListItem
