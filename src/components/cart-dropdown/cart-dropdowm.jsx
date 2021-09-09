import React from "react";
import Custombtn from "../customButton/custombtn";
import "./cart-dropdown.scss";

export default function Cartdropdowm() {
    return (
    <div className='cart-dropdown'>
    <div className='cart-items' />
    <Custombtn>GO TO CHECKOUT</Custombtn>
  </div>
    )
}
