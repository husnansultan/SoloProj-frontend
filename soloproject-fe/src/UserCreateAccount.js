import React, { Component } from 'react';
import axios from 'axios';

class UserCreateAccount extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            submitSuccess: false
        };
    }

    handleInputUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    handleInputPassword = (event) => {
        this.setState({ password: event.target.value });
    }

    createUserAccount = (event) => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8080/soloproject-be/init-methods/fetchUser/addUser',
            data: {
                username: this.state.username,
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
                alert("Account creation failed.");
            });
    }

    render() {
        return (
            <div id="MainDiv">
                <p>
                </p>
                <img src="/Banner.png" width="275" height="175" alt="Banner" />

                <form>
                    <p>Fill out the form and click submit to create account. </p>
                    <input type="text" placeholder="Username" value={this.state.username} onChange={(this.handleInputUsername)}></input>
                    <br></br>
                    <input type="password" placeholder="Password" value={this.state.password} onChange={(this.handleInputPassword)}></input>
                    <br></br>

                    <input type="button" value="Submit" onClick={this.createUserAccount}></input>
                </form>
                {this.state.submitSuccess ?
                    <div>
                        <p>You have successfully created a user account.</p>
                    </div>
                    : null}
            </div>

        );
    }
}

export default UserCreateAccount;