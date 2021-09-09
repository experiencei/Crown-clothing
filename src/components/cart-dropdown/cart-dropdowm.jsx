import React from "react";
import Custombtn from "../customButton/custombtn";
import Cartitem from "../cart-item/cart-item"
import { connect } from 'react-redux'
import "./cart-dropdown.scss";

 function Cartdropdowm({cart }) {
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

const mapStateToProps = ({cart : {cart}}) => ({
  cart
})




export default connect(mapStateToProps)(Cartdropdowm);