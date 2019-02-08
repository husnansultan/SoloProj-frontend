import React, { Component } from 'react';
import axios from 'axios';

class DBFindEntry extends Component {

  constructor() {
    super();
    this.state = {
      searchInput: "",
      foodName: "",
        category: "",
        price: "",
        descr: "",
      resultsRetreived: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.findEntry = this.findEntry.bind(this);
  }

  handleInput = (event) => {
    this.setState({ searchInput: event.target.value }, () => {
    });
  }

  findEntry = (event) => {
    axios({
      method: 'get',
      url: 'http://foodapp.uksouth.cloudapp.azure.com:8080/soloproject-be/init-methods/fetch/getDBEntry/' + this.state.searchInput,
      responseType: 'json'
    }).then(response => {
      this.setState({
        foodName: response.data[0].foodName,
        category: response.data[0].category,
        price: response.data[0].price,
        descr: response.data[0].descr,
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
          <p>Enter Food Name: </p>
          <input id="text" type="text" placeholder="Search..." onChange={(this.handleInput)}></input>
            <br></br>
          <input type="button" onClick={this.findEntry} value="Search"></input>
        </form>
        <br />
        {this.state.resultsRetreived ?
          <div>
            <h2> Food Name : {this.state.foodName} </h2>
            <h3> Category : {this.state.category} </h3>
            <p> Price : {this.state.price} </p>
            <p> Description : {this.state.descr}</p>
            <br />
          </div>
          : null}
      </div >
    );
  }
}

export default DBFindEntry;