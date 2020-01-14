import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ addItem }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (value) {
      addItem(value)
      setValue('')
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Insert todo item..."
          className="form-control"
        />
        <button type="submit" className="sr-only">
          Add todo item
        </button>
      </form>
      {error && (
        <div className="alert alert-danger">The field must not be empty</div>
      )}
    </>
  )
}

Search.propTypes = {
  addItem: PropTypes.func.isRequired
}

export default Search
