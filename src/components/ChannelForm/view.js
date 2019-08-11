import React from 'react'

export default function View (props) {
  const {
    onSubmit,
    value,
    onChange,
    user
  } = props

  return <div>
    <h3>Create a channel</h3>

    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={user}
      />

      <button type='submit'>Send</button>
    </form>
  </div>
}