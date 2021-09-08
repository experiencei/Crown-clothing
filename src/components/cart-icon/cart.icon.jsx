import React from "react";
import "./cart-icon.scss";
import { ReactComponent as ShoppingCart } from "../assests/shopping-bag.svg";

export default function Carticon() {
    return (
        <div className="cart-icon">
            <ShoppingCart className="Shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}
