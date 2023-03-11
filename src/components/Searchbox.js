import React from "react";


const Searchbox = ({ searchChange }) => {
    return (

        <div className='pa2'>
            <input
                className='pa2 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Robots' 
                onChange={searchChange}//HTML onsearch event
            />
         </div>
    );
}



export default Searchbox;