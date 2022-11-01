import React, { useState } from 'react';

const HoverCounter = () => {

    const[hover,setHover]=useState(0);
   
    const incrementHover=()=>{
        setHover(hover+1)
    }

    return (
        <div>
          <h2 onMouseOver={incrementHover}>Hover {hover} Counter</h2>  
        </div>
    );
};

export default HoverCounter;