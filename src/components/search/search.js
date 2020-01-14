import React, { useState } from 'react'

const Search = () => {
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Insert todo item..."
        className="form-control"
      />
    </div>
  )
}

export default Search
