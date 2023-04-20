import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';



const  JustPackMe= () => {
  const _navigate=useNavigate();
  useEffect(()=>{

  },[])
  return (
      <div>
          {/* <h1>HOME PAGE</h1> */}
          <h1>Hey friend</h1>
          <h3>Do you have a journey and you do not know where to start organizing? You have come to the right place
          </h3>
          <h1>JUST PACK ME</h1>
          <h2>The perfect app for the traveler</h2>
          <h3>We'll start with steps, we'll plan together,</h3>
          <h3> we'll make you a list ready!</h3>
          <h3>And now just- start packing !!!!!</h3>
          <div onClick={()=>{_navigate("/register")}}>Not registered yet? register now</div>
          <div onClick={()=>{_navigate("/login")}}>Do you already have an account? Log in</div>
      </div>
  );
  };

export default  JustPackMe;

