import React from "react";

const Square= (props) => {
    return  (
        <div 
//onclick in square call the props.onClick
        onClick={props.onClick} 
        
        // style= {{ 
        //     color: "red"
        // }} //ca give inline CSS as well
        className="square-box"> 
            <h5> {props.value }</h5>
        </div>
    )
}

export default Square;