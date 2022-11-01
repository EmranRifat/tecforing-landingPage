import React, { useEffect, useState } from 'react';

const Context = () => {
    const [date,setDate]=useState(new Date());

const tick=()=>{
    setDate(new Date());
} 


    useEffect(()=>{
        setInterval(tick,1000);
    },[])
    

    return (
        <div>
            <h2 onMouseOver={tick}>Time {date.toLocaleString()}</h2>
             View created at {date.toLocaleTimeString()}
        </div>
    );
};

export default Context;