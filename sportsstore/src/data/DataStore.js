import { createStore } from "redux";
import { ShopReducer } from "../reducers/ShopReducer";
import { CartReducer } from "../reducers/CartReducer";
import { CommonReducer } from "../reducers/CommonReducer";

export const SportsStoreDataStore 
    = createStore(CommonReducer(ShopReducer, CartReducer));
