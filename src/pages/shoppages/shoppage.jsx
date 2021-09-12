import React from 'react';
import { Route } from 'react-router-dom';
import Shopextent from '../../components/shopext/shopextent';
import CollectionPage from '../collection/collectionpreview';


const Shoppage = ({ match }) => {
 return (
            <div>
<Route exact path={`${match.path}`} component={Shopextent}/>
<Route path={`${match.path}:collectionId`} component={CollectionPage }/>

            </div>
        )
    }
 export default Shoppage;
    