import React, {Component} from "react";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {GraphQlUrl} from "../constants/Urls";
import {OrdersConnector} from "./connectors/OrdersConnector";

const GraphQlClient = new ApolloClient({
    uri: GraphQlUrl
});

export class Admin extends Component{

    render() {
        return <ApolloProvider client={ GraphQlClient }>
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-info text-white">
                        <div className="navbar-brand">SPORTS STORE</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-2">
                        <OrdersConnector />
                    </div>
                </div>
            </div>
        </ApolloProvider>
    }
}