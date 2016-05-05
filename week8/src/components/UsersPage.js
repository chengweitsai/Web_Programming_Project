import React, { Component } from 'react';
import { Route, Link } from 'react-router';

import './UsersPage.css';


class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users:[]
    };
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers(data) {
    console.log(data.users);
    this.setState({
      users: data.users
    });
  }

  renderUsers(user) {
    let single_page = '/users/' +user.name
    return(
      <div className="col-sm-4">
        <Link to = {single_page}>
        <h1>{user.name}</h1>
        <img className='img' width="150" 
             height="150" src={user.picture}
        />
        </Link>
        <p>age: {user.age}</p>
      </div>
    );
  }

  componentDidMount() {
    let getUsers = this.getUsers;
    fetch('/api/users')
      .then(function(response) {
        console.log(response.status);
        return response.json();
      }) 
      .then(function(data) {
        console.log('request succeeded with JSON response', data);
        getUsers(data);
      });
  }

  render() {
    return (
      <div className="container-fluid bg-1 text-center">
        <h1>UsersPage</h1>
          <div className='row'>
          {this.state.users.map(this.renderUsers)}
          </div>
      </div>
    );
  }
}

export default UsersPage;
