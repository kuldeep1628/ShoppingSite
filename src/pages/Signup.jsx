import { useState } from 'react';
import './Login/Login.css';
export default function Signup(){

    const [info , setinfo] = useState({});

    function handleSignUp (key, value){
      
        info[key] = value;
        setinfo(info);
        console.log("adsd", info)

    }
    return <div className="Login">
         <h3>Sign Up</h3>
         <form onSubmit={handleSignUp}>
           <input type="text" placeholder="Enter First Name" onChange={(e) => handleSignUp('firstName' , e.target.value)}></input><br/>
           <input type="text" placeholder="Enter Last Name" onChange={(e) =>handleSignUp('lastName' , e.target.value)}></input><br/>
           <input type="text" placeholder="Enter Email" onChange={(e) =>handleSignUp('email' , e.target.value)}></input><br/>
           <input type="text" placeholder="Enter Password" onChange={(e) => handleSignUp('password' , e.target.value)}></input><br/>
           <div className='Submit'>
           <button type="Submit" >Sign up</button>
           </div>
         </form>
    </div>
}