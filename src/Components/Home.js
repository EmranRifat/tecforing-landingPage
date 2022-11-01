import React from 'react';

const Home = () => {

  const taskOne=()=>{
  console.log("Task One")
}
const tastTwo=()=>{
  console.log("Task Two");
}
taskOne();
tastTwo();
    


const square=(x)=>{
  console.log(`Square of ${x} = ${x*x}`)
}
square(50);


    return (
        <div>
            <form >
              <input type="text" name=" " id="" />
            </form>
            <h2> My form</h2>
            <textarea name="" id="" cols="30" rows="10">
                
              </textarea>
              <br />
              <input  type="checkbox" name="" id="" />
        <span>I    </span>
        </div>
    );
};

export default Home;