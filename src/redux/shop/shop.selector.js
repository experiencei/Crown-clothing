import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    hats : 1,
    sneakers : 2,
    jackets : 3,
    womens : 4,
    mens : 5
}

const shoppageSelect = state => state.shoppages;

export const ShopSelect = createSelector(
    [shoppageSelect],
    shoppages =>  shoppages.shopdata
)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [ShopSelect],
    shopdata => shopdata.find( shopdate => shopdate.id === COLLECTION_ID_MAP[collectionUrlParam])
  );