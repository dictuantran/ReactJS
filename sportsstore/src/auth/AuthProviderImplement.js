import React, { Component } from "react";
import Axios from "axios";
import { AuthContext } from "./AuthContext";
import { AuthUrl } from "../constants/Urls";

export class AuthProviderImplement extends Component {

    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
            webToken: null
        }
    }

    authenticate = (credentials) => {
        return Axios.post(AuthUrl, credentials).then(response => {
            if(response.data.success === true) {
                this.setState({
                    isAuthenticated: true,
                    webToken: response.data.token
                })

                return true;
            } else {
                throw new Error("Invalid Credentials");
            }             
        })
    }

    signout = () => {
        this.setState({ isAuthenticated: false, webToken: null });
    }

    render = () => 
        <AuthContext.Provider value={{...this.setState, 
            authenticate: this.authenticate, 
            signout: this.signout }}> { this.props.children }
        </AuthContext.Provider>
}