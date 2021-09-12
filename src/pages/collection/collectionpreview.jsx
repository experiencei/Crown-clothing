import React from "react";
import './collectionview.scss';
import { connect } from "react-redux";
import shopitem from "../../components/shop-item/shopitem";
import { selectCollection } from "../../redux/shop/shop.selector";

const Collectionpreview = ({ collection }) => {
    console.log(collection)
    return (
        <div className='collection'>
            <h2>Category Page</h2>
        </div>
    )
}
const mapStateToProps = (state , ownprops) => ({
    collection : selectCollection(ownprops.match.params.collectionId)(state)
})




export default connect(mapStateToProps)(Collectionpreview)
