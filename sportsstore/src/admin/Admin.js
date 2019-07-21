import React, {Component} from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { GraphQlUrl } from "../constants/Urls";
import { ToggleLink } from "../routing/ToggleLink";
import { Route, Redirect, Switch } from "react-router-dom";
import { OrdersConnector } from "./connectors/OrdersConnector";
import { AuthPrompt } from "../auth/AuthPrompt";
import { authWrapper } from "../auth/AuthWrapper";

export const Admin = authWrapper(class extends Component {

    constructor(props) {
        super(props);
        this.client = new ApolloClient({
            uri: GraphQlUrl,
            request: gqloperation => gqloperation.setContext({
                headers: {
                    Authorization: `Bearer<${this.props.webToken}>`
                },
            })
        })
    }

    render() {
        return <ApolloProvider client={ this.client }>
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-info text-white">
                        <div className="navbar-brand">SPORTS STORE</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 p-2">
                        <ToggleLink to="/admin/orders">Orders</ToggleLink>
                        {
                            this.props.isAuthenticated &&
                            <button onClick={ this.props.signout }
                                className="btn btn-block btn-secondary m-2 fixed-bottom col-3">
                                Log Out
                            </button>
                        }
                    </div>
                    <div className="col-9 p-2">
                        <Switch>
                            {
                                !this.props.isAuthenticated && 
                                <Route component={ AuthPrompt } />
                            }
                            <Route path="/admin/orders" component={ OrdersConnector } />
                            <Redirect to="/admin/orders" />
                        </Switch>
                    </div>
                </div>
            </div>
        </ApolloProvider>
    }
})