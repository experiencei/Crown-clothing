import CartActionTypes from "./cart.type";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
export const addCart = item => ({
  type: CartActionTypes.ADD_CART,
  payload : item
});