
import { ADD_ITEM, REMOVE_ITEM } from "../action/Types";

 const initailState = [];

const CartReducer = (state = initailState, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_ITEM:
      //check item is exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //increase qty+1
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        //add new item
        return [...state, { ...product, qty: 1 }];
      }

      break;
    case REMOVE_ITEM:
      //check item is exist
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    
    default:
      return state;
      break;
  }
};

export default CartReducer;
