import React, { Component } from 'react';
import axios from 'axios';

class UserUpdateAccount extends Component {
    constructor() {
        super();
        this.state = {
            updateInput: "",
            userName: "",
            password: "",
            submitSuccess: false
        };
    }

    handleInputUpdateInput = (event) => {
        this.setState({ updateInput: event.target.value });
    }

    handleInputUsername = (event) => {
        this.setState({ userName: event.target.value });
    }

    handleInputPassword = (event) => {
        this.setState({ password: event.target.value });
    }

    updateAccount = (event) => {
        axios({
            method: 'put',
            url: 'http://127.0.0.1:8081/soloproject-be/init-methods/updateUser/' + this.state.updateInput,
            data: {
                userName: this.state.userName,
                password: this.state.password,
            }
        })
            .then(response => {
                this.setState({
                    submitSuccess: true
                })
            })
            .catch(function (error) {
                console.log(error);
                alert("Account update failed.");
            });
    }


    render() {
        return (
            <div id="MainDiv">
                <p>
                </p>
                <img src="/Banner.png" width="225" height="125" alt="Banner" />

                <form>
                    <p>Fill out the form and click submit to update account.</p>
                    <p>Enter username of account you wish to change:</p>
                    <input type="text" placeholder="Username" value={this.state.updateInput} onChange={(this.handleInputUpdateInput)}></input>
                    <br></br>
                    <p>Enter the details you wish to change:</p>
                    <input type="text" placeholder="Username" value={this.state.userName} onChange={(this.handleInputUsername)}></input>
                    <br></br>
                    <input type="password" placeholder="Password" value={this.state.password} onChange={(this.handleInputPassword)}></input>
                    <br></br>
                    <input type="button" value="Submit" onClick={this.updateAccount}></input>
                </form>
                {this.state.submitSuccess ?
                    <div>
                        <p>You have successfully updated a user account.</p>
                    </div>
                    : null}
            </div>

        );
    }
}

export default UserUpdateAccount;