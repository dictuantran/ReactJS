import React, { Component } from "react";
import { PaginationControls } from "../../components/controls/PaginationControls";
import { ProductsRow } from "../product/ProductsRow";
import { Link } from "react-router-dom";
import { Search } from "../../components/controls/Search";

export class ProductTable extends Component {

    render = () => <div>
        <h4 className="bg-info text-white text-center p-2">
            { this.props.totalSize } Products
        </h4>
        <Search />

        <PaginationControls keys={["ID", "Name", "Category"]}
            { ...this.props } />

        <table className="table table-sm table-striped">
            <thead>
                <tr><th>ID</th>
                    <th>Name</th><th>Category</th>
                    <th className="text-right">Price</th>
                    <th className="text-center"></th>
                </tr>
            </thead>
            <tbody>
                { this.props.products.map(prod => 
                    <ProductsRow key={ prod.id} product={ prod }
                        deleteProduct={ this.props.deleteProduct } />
                )}
            </tbody>
        </table>
        <div className="text-center">
            <Link to="/admin/products/create" className="btn btn-primary">
                Create Product
            </Link>
        </div>
    </div>
}