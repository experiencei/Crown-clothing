import SHOP_DATA from "./shop.data";
import { shopTypes } from "./shop.types";

const initialState = {
  shopdata : SHOP_DATA
}

const shopReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case shopTypes.SHOP_TYPES:
    default:
        return state
    }
}
export default shopReducer

