import { createSelector } from "reselect";

const shoppageSelect = state => state.shoppages;

export const ShopSelect = createSelector(
    [shoppageSelect],
    shoppages =>  shoppages.shopdata
)

