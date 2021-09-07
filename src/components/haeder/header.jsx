import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utility";
import "./header.scss"
import { ReactComponent as Logo } from "../assests/crown.svg"

 function Header({currentState}) {
    return (
        <div className="header">
      <Link className="logo-container" to ="/">
       <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className='option' to ="/shop">
           SHOP
        </Link>
        <Link className='option' to="/shop">
           CONTACT
        </Link>
        {currentState ?( <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) : (<Link className='option' to="/signin">SIGN IN</Link>)}
      </div>
   </div>
 )
    
}

const mapStateToProps = (state) => ({
   currentState : state.user.currentuser
})

export default connect (mapStateToProps)(Header)