import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home';
import UserFindAccount from './UserFindAccount';
import UserUpdateAccount from './UserUpdateAccount';
import UserCreateAccount from './UserCreateAccount';
import UserRemoveAccount from './UserRemoveAccount';
import DBFindEntry from './DBFindEntry';
import DBAddEntry from './DBAddEntry';
import DBUpdateEntry from './DBUpdateEntry';
import DBRemoveEntry from './DBRemoveEntry';

class Navbar extends Component {

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <ul>
                                <ul id="nav">
                                    <li><Link to="/">Home</Link></li>
                                    <div>
                                        <li className="dropdown">
                                            <a href="javascript:void(0)" className="dropbtn">User Account</a>
                                            <div className="dropdown-content">
                                                <Link style={{ pointerEvents: 'none' }} to="/UserFindAccount">Search</Link>
                                                <Link to="/UserCreateAccount">Create</Link>
                                                <Link to="/UserUpdateAccount">Update</Link>
                                                <Link to="/UserRemoveAccount">Delete</Link>
                                            </div>
                                        </li>
                                    </div>
                                    <div>
                                        <li className="dropdown">
                                            <a href="javascript:void(0)" className="dropbtn">Your Foods</a>
                                            <div className="dropdown-content">
                                                <Link to="/DBFindEntry">Search</Link>
                                                <Link to="/DBAddEntry">Add</Link>
                                                <Link to="/DBUpdateEntry">Update</Link>
                                                <Link to="/DBRemoveEntry">Remove</Link>
                                            </div>
                                        </li>
                                    </div>
                                </ul>
                            </ul>
                        </ul>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/UserFindAccount" component={UserFindAccount} />
                    <Route path="/UserUpdateAccount" component={UserUpdateAccount} />
                    <Route path="/UserCreateAccount" component={UserCreateAccount} />
                    <Route path="/UserRemoveAccount" component={UserRemoveAccount} />
                    <Route path="/DBFindEntry" component={DBFindEntry} />
                    <Route path="/DBAddEntry" component={DBAddEntry} />
                    <Route path="/DBUpdateEntry" component={DBUpdateEntry} />
                    <Route path="/DBRemoveEntry" component={DBRemoveEntry} />
                </div>
            </Router>
        );
    }
}

export default Navbar;