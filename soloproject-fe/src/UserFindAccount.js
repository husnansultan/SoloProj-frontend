import React, { Component } from 'react';
import axios from 'axios';

class UserFindAccount extends Component {

  constructor() {
    super();
    this.state = {
      searchInput: "",
      userName: "",
      password: "",
      resultsRetreived: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.findAccount = this.findAccount.bind(this);
  }

  handleInput = (event) => {
    this.setState({ searchInput: event.target.value }, () => {
    });
  }

  findAccount = (event) => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8081/soloproject-be/init-methods/fetchUsers/getUser/' + this.state.searchInput,
      responseType: 'json'
    }).then(response => {
      this.setState({
        userName: response.data[0].userName,
        password: response.data[0].password,
        resultsRetreived: true
      })
    })
      .catch(function (error) {
        console.log(error);
        alert("Database search failed.");
      });
  }

  render() {

    return (
      <div className="Search" id="MainDiv">
        <p>
        </p>
       <img src="/Banner.png" width="225" height="125" alt="Banner" />

        <form onSubmit={this.retrieveData}>
          <p>Enter User Name: </p>
          <input id="text" type="text" placeholder="Search..." onChange={(this.handleInput)}></input>
          <input type="button" onClick={this.findAccount} value="Search"></input>
        </form>
        <br />
        {this.state.resultsRetreived ?
          <div>
            <h2> User Name: {this.state.userName} </h2>
            <h2> Password :  </h2>
            <br />
          </div>
          : null}
      </div >
    );
  }
}

export default UserFindAccount;