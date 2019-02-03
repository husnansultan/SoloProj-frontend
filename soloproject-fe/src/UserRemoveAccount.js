import React, { Component } from 'react';
import axios from 'axios';

class UserRemoveAccount extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            submitSuccess: false
        }
        this.deleteAccount = this.deleteAccount.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (event) => {
        this.setState({ userName: event.target.value });
    }

    deleteAccount = (event) => {
        axios({
            method: 'delete',
            url: 'http://127.0.0.1:8080/soloproject-be/init-methods/fetchUser/removeUser/' + this.state.userName,
            responseType: 'json',
            data: {
                userName: this.state.userName
            }
        })
            .then(response => {
                this.setState({
                    submitSuccess: true
                })
            })
            .catch(function (error) {
                console.log(error);
                alert("Account removal failed.");
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
                        <p>Enter name and click submit to delete your account.</p>
                        <input type="text" placeholder="Delete Account" onChange={(this.handleInput)} name="Delete"></input>
                        <input type="button" value="Submit" onClick={this.deleteAccount}></input>
                    </form>
                    {this.state.submitSuccess ?
                        <div>
                            <p>You have successfully removed a user account.</p>
                        </div>
                        : null}
                </div>
            </div>
        );
    }
}

export default UserRemoveAccount;