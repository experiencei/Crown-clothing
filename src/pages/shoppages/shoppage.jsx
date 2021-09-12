import React from 'react';
import { Route } from 'react-router-dom';
import Shopextent from '../../components/shopext/shopextent';
// import Collectionpreview from '../collection/collectionpreview';
import Collectionpreview from "../collection/collectionpreview";

const Shoppage = ({ match }) => {
    console.log(match)
 return (
            <div>
<Route exact path={`${match.path}`} component={Shopextent}/>
{/* <Route path={`${match.path}/:collectionId`} component={Collectionpreview }/> */}

            </div>
        )
    }
 export default Shoppage;
    