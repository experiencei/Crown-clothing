import React from "react";
import Custombtn from "../customButton/custombtn";
import Cartitem from "../cart-item/cart-item";
import { selectCartItems } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux'
import "./cart-dropdown.scss";

 function Cartdropdowm({cart}) {
    return (
    <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cart.map(carted => 
        <Cartitem key={carted.id} item={carted}/>
        )
      }
    </div>
    <Custombtn>GO TO CHECKOUT</Custombtn>
  </div>
    )
}

const mapStateToProps = state => ({
  cart : selectCartItems(state)
})




export default connect(mapStateToProps)(Cartdropdowm);