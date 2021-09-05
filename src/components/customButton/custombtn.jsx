import React from "react";
import "./custombtn.scss";

export default function Custombtn({children ,...otherprops}) {
    return (
        <div >
         <button className='custom-button' {...otherprops}>{children}</button> 
        </div>
    )
}
