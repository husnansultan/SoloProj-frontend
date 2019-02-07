import React, { Component } from 'react';
import axios from 'axios';

class DBAddEntry extends Component {
    constructor() {
        super();
        this.state = {
            foodName: "",
            category: "",
            price: "",
            descr: "",
            submitSuccess: false
        };
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

    addDBEntry = (event) => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8082/soloproject-be/init-methods/fetch/addDBEntry/',
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
                alert("Entry creation failed.");
            });
    }

    render() {
        return (
            <div id="MainDiv">
                <p>
                </p>
                <img src="/Banner.png" width="225" height="125" alt="Banner" />

                <form>
                    <p>Please Fill out the Form below and get a Grip of Life !! </p>
                    <input type="text" placeholder="Food Name" value={this.state.foodName} onChange={(this.handleInputFoodName)}></input>
                    <br></br>
                    <input type="text" placeholder="Category" value={this.state.category} onChange={(this.handleInputCategory)}></input>
                    <br></br>
                    <input type="text" placeholder="Price" value={this.state.price} onChange={(this.handleInputPrice)}></input>
                    <br></br>
                    <input type="text" placeholder="Description" value={this.state.descr} onChange={(this.handleInputDescr)}></input>
                    <br></br>
                    <input type="button" value="Submit" onClick={this.addDBEntry}></input>
                </form>
                <br />
                {this.state.submitSuccess ?
                    <div>
                        <p>One step closer to taking back CONTROL</p>
                    </div>
                    : null}
            </div >

        );
    }
}

export default DBAddEntry;