import CartActionTypes  from './cart.type';
import { addItemToCart } from './cart.utilis';
const INITIAL_STATE = {
  hidden: true,
  cart : []
};

const cartReducer = (state = INITIAL_STATE, {type , payload}) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart , payload )
      };
    default:
      return state;
  }
};
 


export default cartReducer

