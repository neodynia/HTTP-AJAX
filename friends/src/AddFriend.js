import React from 'react'

const AddFriend = ({ name, age, email, handleChange, handleSubmit }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        Name:
        <input
          name="name"
          placeholder="enter text"
          type="Name"
          value={name}
          onChange={handleChange}
        />
        Age:
        <input
          name="age"
          placeholder="enter text"
          type="Age"
          value={age}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="enter text"
          type="Email"
          value={email}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default AddFriend
