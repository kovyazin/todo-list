import React from 'react'
import PropTypes from 'prop-types'

const FilterBar = ({ deleteCompletedItems, handleFilter, filter }) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' }
  ]

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="btn-group">
        {buttons.map(({ name, label }) => {
          const clazz = filter === name ? 'btn-primary' : 'btn-outline-primary'
          return (
            <button
              type="button"
              className={`btn ${clazz}`}
              onClick={() => handleFilter(name)}
            >
              {label}
            </button>
          )
        })}
      </div>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={deleteCompletedItems}
      >
        Clear completed
      </button>
    </div>
  )
}

FilterBar.propTypes = {
  deleteCompletedItems: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default FilterBar
