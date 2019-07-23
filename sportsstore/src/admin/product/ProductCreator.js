import React, { Component } from "react";

export class ProductCreator extends Component {

    constructor(props) {
        super(props);

    }

    navigate = () => this.props.history.push('/admin/products');

    render = () => {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORTS STORE</div>
                </div>
            </div>
        </div>
    }
}