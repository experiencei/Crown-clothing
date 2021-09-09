import React from "react";
import "./cart-icon.scss";
import { connect } from "react-redux";
import { ReactComponent as ShoppingCart } from "../assests/shopping.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

function Carticon({ toggleCartHidden }) {
    return (
        <div className="cart-icon">
            <ShoppingCart className="Shopping-icon" onClick={toggleCartHidden} />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
  
export default connect(
    null,
    mapDispatchToProps
  )(Carticon);