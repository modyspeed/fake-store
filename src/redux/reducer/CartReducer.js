import { addItem, delItem } from "../action/Types";
const cart = [];
const CartReducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case addItem:
      const exist = state.find((e) => e.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
      
        return [...state, { ...product, quantity: 1 }];
      }
      break;

    case delItem:
      const exist1 = state.find((e) => e.id === product.id);
      if (exist1.quantity === 1) {
        return state.filter((e) => e.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default CartReducer;
