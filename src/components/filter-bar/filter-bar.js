import React from 'react'
import PropTypes from 'prop-types'

const FilterBar = ({ deleteCompletedItems }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="btn-group">
        <button type="button" className="btn btn-primary">
          All
        </button>
        <button type="button" className="btn btn-outline-primary">
          Active
        </button>
        <button type="button" className="btn btn-outline-primary">
          Completed
        </button>
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
  deleteCompletedItems: PropTypes.func.isRequired
}

export default FilterBar
