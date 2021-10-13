import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FaBlackberry, FaLessThanEqual } from "react-icons/fa";

//
function Homepage() {
  const [name,setName]=useState('');
  const [pwd,setPwd]=useState('');
  const [mailid,setmailid]=useState('');

  const handle = () => {
    localStorage.setItem('Name',(name));
    localStorage.setItem('Password',(pwd));
    localStorage.setItem('Email',(mailid));
    
 };

  return (
    <div className="Homepage">
      <Link to="/feed">Goto Feed</Link>
      <form >

      <div className="my-5" style={{textAlign:"center"}}>
     
      <div className=" " style={{}}>
      <div><h2 className="my-5" >LogIn</h2>  
      <label className="mr-1" >Full Name</label>
       
         <input className="mr-4"
            placeholder="Name"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
         /></div>
         <div>
         <label  className="mr-4">Email</label>
         <input className="mr-3"
            type='password'
            placeholder="xyz@gmail.com"
            value={mailid}
            required
            onChange={(e) => setmailid(e.target.value)}
         /></div>
         <div>
         <label  className="mr-2">Password</label>
         <input  className="mr-4"
            type='password'
            placeholder="******"
            value={pwd}
            required
            onChange={(e) => setPwd(e.target.value)}
         /></div>
         <div>
       <Link to='/feed'><button type="submit "className="px-3 btn btn-primary my-4" onClick={handle}>Login</button>
       </Link>
         </div>
       </div>
      </div>
      </form>
    </div>
    

   

  );
}

export default Homepage;
