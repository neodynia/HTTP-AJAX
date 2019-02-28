import React, { Component } from 'react'
import FriendList from './FriendList'
import axios from 'axios'
import AddFriend from './AddFriend'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:5000/friends')
    return this.setState({ friends: response.data })
  }

  handleChange = e => {
    if (e.target.value === 'age') {
      return parseInt(e.target.value)
    }
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { name, age, email } = this.state
    const response = await axios.post('http://localhost:5000/friends', {
      name,
      age,
      email
    })
    return this.setState({
      friends: response.data,
      name: '',
      age: '',
      email: ''
    })
  }

  updateFriend = async e => {
    const id = e.target.id
    const { name, age, email } = this.state
    const response = await axios.put(`http://localhost:5000/friends/${id}`, {
      name,
      age,
      email
    })

    return this.setState({
      friends: response.data,
      name: '',
      age: '',
      email: ''
    })
  }

  deleteFriend = async e => {
    const id = e.target.id
    const response = await axios.delete(`http://localhost:5000/friends/${id}`)
    return this.setState({
      friends: response.data
    })
  }

  render() {
    const { friends, name, age, email } = this.state
    return (
      <div className="full-container">
        <FriendList
          friends={friends}
          deleteFriend={this.deleteFriend}
          backToAdd={this.backToAdd}
          updateFriend={this.updateFriend}
        />

        <AddFriend
          name={name}
          age={age}
          email={email}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default App
