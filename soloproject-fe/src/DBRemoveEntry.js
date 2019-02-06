import React, { Component } from 'react';
import axios from 'axios';

class DBRemoveEntry extends Component {

    constructor() {
        super();
        this.state = {
            foodName: "",
            submitSuccess: false
        }
        this.removeEntry = this.removeEntry.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (event) => {
        this.setState({ foodName: event.target.value });
    }

    removeEntry = (event) => {
        axios({
            method: 'delete',
            url: 'http://127.0.0.1:8080/soloproject-be/init-methods/fetch/removeDBEntry/' + this.state.foodName,
            data: {
                foodName: this.state.foodName
            }
        })
        .then(response => {
                this.setState({
                    submitSuccess: true
                })
            })
        .catch(function (error) {
            console.log(error);
             alert("Entry removal failed.");
        });
    }

    render() {
        return (
            <div id="MainDiv">
                <div>
                    <p>
                    </p>
                    <img src="/Banner.png" width="225" height="125" alt="Banner" />
                    <form>
                        <p>Enter name and click submit to remove a Food. </p>
                        <input type="text" placeholder="Delete your Guilt..." onChange={(this.handleInput)} name="Delete"></input>
                        <br></br>
                        <input type="button" value="Submit" onClick={this.removeEntry}></input>
                    </form>
                    {this.state.submitSuccess ?
                    <div>
                        <p>You have successfully denied the TRUTH </p>
                    </div>
                    : null}
                </div>
            </div>
        );
    }
}

export default DBRemoveEntry;