import { addItem, delItem } from "./Types";
export const AddToCart = (product) => {
  return {
    type: addItem,
    payload: product,
  };
};
export const DelFromCart = (product) => {
  return {
    type: delItem,
    payload: product,
  };
};
