import React from "react";


const Scroll = (props) => {

    
    return (

        <div style={{ overflowY: 'scroll' , border: '5px solid black', height: '500px'}}> 
        {/* double curly braces to show the css object  */}

        {props.children}
        {/* the children are returned here as it has access to it
        the props are the information held within robots array object  */}

        </div>
        
    );

}

export default Scroll;