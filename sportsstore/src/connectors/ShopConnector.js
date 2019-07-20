import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { loadData } from "../actions/ActionCreators";
import { DataTypes } from "../constants/Types";
import { Shop } from "../components/shop/Shop";
import { addToCart, updateCartQuantity, removeFromCart, clearCart } from "../actions/CartActionCreators";
import { CartDetails } from "../components/shop/CartDetails";
import { DataGetter } from "../data/DataGetter";

const mapStateToProps = (dataStore) => ({
    ...dataStore
})

const mapDispatchToProps = {
    loadData,
    addToCart, updateCartQuantity, removeFromCart, clearCart
}
    
export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return <Switch>
               <Redirect from="/shop/products/:categroy" 
                        to="/shop/products/:category/1"
                        exact={true} />
                <Route path={"/shop/products/:category/:page"}
                        render = {(routeProps) => 
                            <DataGetter { ...this.props } {...routeProps}>
                                <Shop { ...this.props } {...routeProps} /> 
                            </DataGetter>} />
                <Route path="/shop/cart" 
                        render={ (routeProps) =>
                            <CartDetails { ...this.props } { ...routeProps } />} />
                <Redirect to="/shop/products/all/1" />
            </Switch>           
        }

        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);            
        }
    }
)