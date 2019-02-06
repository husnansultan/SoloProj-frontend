import React, { Component } from 'react';
import axios from 'axios';

class DBEntryUpdate extends Component {
    constructor() {
        super();
        this.state = {
            updateInput: "",
             foodName: "",
            category: "",
            price: "",
            descr: "",
            submitSuccess: false
        };
    }

    handleInputUpdateInput = (event) => {
        this.setState({ updateInput: event.target.value });
    }

    handleInputFoodName = (event) => {
        this.setState({ foodName: event.target.value });
    }

    handleInputCategory = (event) => {
        this.setState({ category: event.target.value });
    }

    handleInputPrice = (event) => {
        this.setState({ price: event.target.value });
    }

    handleInputDescr = (event) => {
        this.setState({ descr: event.target.value });
    }

    updateDBEntry = (event) => {
        axios({
            method: 'put',
            url: 'http://127.0.0.1:8080/soloproject-be/init-methods/fetch/updateDBEntry/' + this.state.updateInput,
            data: {
                foodName: this.state.foodName,
                category: this.state.category,
                price: this.state.price,
                descr: this.state.descr,
            }
        })
            .then(response => {
                this.setState({
                    submitSuccess: true
                })
            })
            .catch(function (error) {
                console.log(error);
                alert("Entry update failed.");
            });
    }

    render() {
        return (
            <div id="MainDiv">
                <p>
                </p>
                <img src="/Banner.png" width="225" height="125" alt="Banner" />

                <form>
                    <p>Fill out the form if you lied about a Food earlier</p>
                    <p>Enter name of entry you wish to change:</p>
                    <input type="text" placeholder="Entry to change" value={this.state.updateInput} onChange={(this.handleInputUpdateInput)}></input>
                    <br></br>
                    <p>Enter the details you wish to change:</p>
                   <input type="text" placeholder="Food Name" value={this.state.foodName} onChange={(this.handleInputFoodName)}></input>
                    <br></br>
                    <input type="text" placeholder="Category" value={this.state.category} onChange={(this.handleInputCategory)}></input>
                    <br></br>
                    <input type="text" placeholder="Price" value={this.state.price} onChange={(this.handleInputPrice)}></input>
                    <br></br>
                    <input type="text" placeholder="Description" value={this.state.descr} onChange={(this.handleInputDescr)}></input>
                    <br></br>
                    <input type="button" value="Submit" onClick={this.updateDBEntry}></input>
                </form>
                {this.state.submitSuccess ?
                    <div>
                        <p>You have successfully updated a Yer food.</p>
                    </div>
                    : null}
            </div>

        );
    }
}

export default DBEntryUpdate;