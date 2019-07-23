import React, { Component } from "react";

export class ProductTable extends Component {

    render = () => <div>
        <h4 className="bg-info text-white text-center p-2">
            { this.props.totalSize } Products
        </h4>
    </div>
}