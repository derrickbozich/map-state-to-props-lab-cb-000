import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    const users;
    if (this.props.users.length > 0) {
      users = this.props.users.map(user => {
        return <li>{user.username}</li>
      })
    } else {
      users = <div></div>
    }
    const
    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  users: state
}


export default connect(mapStateToProps)(Users)
