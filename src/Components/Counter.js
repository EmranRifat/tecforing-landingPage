import React, { useState } from 'react';

const Counter = () => {
 const[count,setCount]=useState(0);
 let[decriment,setDecriment]=useState(0);
//  console.log(count);
 
const handleCount=()=>{
    setCount(count+1)
 }
 const isEvenorOdd=()=>count % 2===0;

 const handleMinus=()=>{
    setDecriment(decriment-1)
 }
 
    return (
        <div>
             <h2>{count} {isEvenorOdd()?'even' : 'odd'}</h2>
            <button onClick={handleCount}>Imcriment</button>
            <h2>{decriment}</h2>
            <button onClick={handleMinus}>Decriment</button>
        </div>
    );
};

export default Counter;