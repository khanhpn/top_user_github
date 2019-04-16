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
        <div className="row">
          <div className="col-md-12">
            <Link to="/users" className="btn btn-success">Back</Link>
          </div>
          <div className="col-md-12">{this.showDetailUser()}</div>
        </div>
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
      <div className="card">
        <img className="card-img-top" src={user.avatar_url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h4 className="card-title">{user.location}</h4>
        </div>
      </div>
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
