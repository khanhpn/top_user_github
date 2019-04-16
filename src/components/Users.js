import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const TOP_FIVE = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

export default class Users extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Top 5 GitHub Users</h1>
          <p>Tap the username to see more information</p>
        </div>
        <div className="col-md-12">
          <div className="list-group">{this.listUsers()}</div>
        </div>
      </div>
    )
  }

  listUsers = () => {
    return TOP_FIVE.map(user => {
      return (
        <span key={user} className="label label-default"><Link to={`/users/${user}`}>{user}</Link></span>
      );
    });
  }
}
