import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Loading from './Loading';

const URL = "https://api.github.com/users";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  render() {
    var {name} = this.props.match.params
    if(name) {
      return (
        <>
          {this.showDetailUser()}
          <div className="container"><Link className="btn btn-success" to="/users">Back</Link></div>
        </>
      )
    } else {
      return (
        <div>
          No name found
        </div>
      )
    }
  }

  showDetailUser = () => {
    let {user} = this.state;
    if(!user) return <Loading />;
    return(
      <header className="clearfix">
        <nav className="navbar navbar-default">
          <div className="container">
            <ul className="nav navbar-nav">
              <li>
                <div className="inset">
                  <img src={user.avatar_url} />
                </div>
              </li>
              <li>
                <div>{user.name}</div>
                <div>{user.location}</div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }

  componentDidMount() {
    var {name} = this.props.match.params;
    name = name.toLowerCase();
    axios.get(`${URL}/${name}`).then(response => {
      const {data} = response;
      this.setState({user: data});
    }).catch(error => {
    });
  }
}
