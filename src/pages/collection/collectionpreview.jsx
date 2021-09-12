// import React from "react";
// import './collectionview.scss';
// import { connect } from "react-redux";
// import Shopitem from "../../components/shop-item/shopitem";
// import { selectCollection } from "../../redux/shop/shop.selector";

// const Collectionpreview = ({ collection }) => {
//    const { title , items } = collection
//     return (
//         <div className='collection-page'>
//             <h2 className='title'>{title}</h2>
//             <div className="items">
// {items.map( item => 
// <Shopitem  key={item.id} item={item}/>)
// }
//             </div>
//         </div>
//     )
// }
// const mapStateToProps = (state , ownprops) => ({
//     collection : selectCollection(ownprops.match.params.collectionId)(state)
// })




// export default connect(mapStateToProps)(Collectionpreview)
import React from 'react';
import './collectionview.scss';
import { connect } from 'react-redux';

import Shopitem from "../../components/shop-item/shopitem";

import { selectCollection } from '../../redux/shop/shop.selector';


const CollectionPage = ({ shopdata }) => {
  const { title, items } = shopdata;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <Shopitem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  shopdata: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
