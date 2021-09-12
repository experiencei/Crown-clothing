import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//     hats : 1,
//     sneakers : 2,
//     jackets : 3,
//     womens : 4,
//     mens : 5
// }         .find( shopdate => shopdate.id === COLLECTION_ID_MAP[collectionUrlParam])

const shoppageSelect = state => state.shoppages;


export const ShopSelect = createSelector(
    [shoppageSelect],
    shoppages =>  shoppages.shopdata
)

export const ShopSelect1 = createSelector(
  [ShopSelect],
  shoppages => Object.keys(shoppages).map( key => shoppages[key] )
)



export const selectCollection = collectionUrlParam =>
  createSelector(
    [ShopSelect],
    shopdata => shopdata[collectionUrlParam]
  );

