import React from 'react'

const FilterBar = () => {
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
      <button type="button" className="btn btn-outline-primary">
        Clear complited
      </button>
    </div>
  )
}

export default FilterBar
