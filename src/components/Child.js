import React, {useState} from "react";

const Child = ({showModal, btnClicked}) =>{
    
    return(
        <div className = "child">
            <h2>Child Component</h2>
            <button onClick={btnClicked}>Show Modal</button>
            {
                showModal && <h3>Modal Content</h3> && <p>This is the modal content.</p>
            }
        </div>
    )
}
export default Child;