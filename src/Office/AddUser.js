import React from 'react';
import "./AddUser.css";

const AddUser = () => {

const handleSubmit=event=>{
    event.preventDefailt();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const user={name,email};
    console.log(user)
    
// send data to server
// fetch('http://localhost:5000/user',{
//     method:'POST',
//     headers:{
//         'content-type':'application/json',
//     },
//     body: JSON.stringify(user),
    
// })
// .then(res=>res.json())
// .then(data=>{
//     console.log("success",data);
// })

}

    
    return (
        <div >
            <h1 >Please Add a new user</h1>
            
            <form onSubmit={handleSubmit} >
                <input type="text"name='name' placeholder='name' required /><br />
                <input type="email"name='email' placeholder='Email' required /><br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;