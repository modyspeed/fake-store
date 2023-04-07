import { addItem, delItem } from "../action/Types";
const cart = [];
const CartReducer = (state = cart, action) => {
  switch (action.type) {
    case addItem:
      const product = action.payload;
      const exist = state.find((e) => e.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        const product = action.payload;
        return [...state, { ...product, quantity: 1 }];
      }
      break;

    case delItem:
      const exist1 = state.find((e) => e.id === product.id);
      if (exist1.quantity === 1) {
        return state.filter((e) => e.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x
        );
      }
      break;

    default:
    return state;
  }
};

export default CartReducer;
