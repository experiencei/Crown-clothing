import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import Shoppreview from '../../components/shoppreview/shoppreview';

export default class Shoppage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections : SHOP_DATA
        }
    }
    
    render() {
        const {collections} = this.state;
        return (
            <div>
                {collections.map(({id , ...othersection}) => (
          <Shoppreview key={id} {...othersection} /> )             
                )}
            </div>
        )
    }
}
