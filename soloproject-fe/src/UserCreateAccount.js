import React, { Component } from 'react';
import axios from 'axios';

class UserCreateAccount extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            submitSuccess: false,
            loginStatus: false
        };
    }

    handleInputUserName = (event) => {
        this.setState({ userName: event.target.value });
    }

    handleInputPassword = (event) => {
        this.setState({ password: event.target.value });
    }
    
    handleInputLoginStatus = (event) => {
        this.setState({ loginStatus: event.target.value });
    }

    createUserAccount = (event) => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8080/soloproject-be/init-methods/fetchUser/addUser',
            data: {
                userName: this.state.userName,
                password: this.state.password,
                loginStatus: this.state.loginStatus
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
                <img src="/Banner.png" width="225" height="125" alt="Banner" />

                <form>
                    <p>Fill out the form and click submit to create account. </p>
                    <input type="text" placeholder="UserName" value={this.state.userName} onChange={(this.handleInputUserName)}></input>
                    <br></br>
                    <input type="password" placeholder="Password" value={this.state.password} onChange={(this.handleInputPassword)}></input>
                    <br></br>
                    <label className="switch">
                        <input type="checkbox" value={this.state.loginStatus} onChange={(this.handleInputLoginStatus)}/>
                        <span className="slider round"></span>
                    </label>
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