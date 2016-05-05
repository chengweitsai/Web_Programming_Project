import React, { Component } from 'react';

import './SingleUserPage.css';

class SingleUserPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: 'Nobody',
      age: 'INF'
    };
    this.getUser = this.getUser.bind(this);
  }

  getUser(data) {
    this.setState({
      name: data.name,
      age: data.age
    });
  }

  componentDidMount() {
    let getUser = this.getUser;
    let username = this.props.params.username;
    console.log(username);
    let path = '/api/users/' +username;

    fetch( path )
      .then(function(response) {
        console.log(response.status);
        return response.json();
      }) 

      .then(function(data) {
        console.log('request succeeded with JSON response', data);
        getUser(data);
      });

  }

  render() {
    const user = this.state;
    return (
      <div className="container-fluid" >
        <h1>SingleUserPage</h1>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
      </div>
    );
  }
}

export default SingleUserPage;
