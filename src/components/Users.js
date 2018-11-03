import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    const users = this.props.users.map(user => {
      return <li>{user.username}</li>
    })
    return (
      <div>
        <ul>
          {this.props.users}
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
