import { createStore } from "redux";
import CartReducer from "./reducer/CartReducer";
import { RootReducer } from "./reducer";
export const Store =createStore(RootReducer)