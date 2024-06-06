import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  // const [apiData, setApiData] = useState(null);

  const handleLoginForm = async (event) => {
    event.preventDefault();
    
    try {
      if(!email || !password) {
        alert("Please enter both your email and password");
        return;
      } else {
        const loginData = {email, password};
        const response = await axios.post('/account/login', loginData, {withCredentials: true});
        console.log(response);
        alert(response.data.msg);
        if(response.data.msg == 'From API: Password ok!') {
          setRedirect(true);
        }
      }
    } catch (error) {
      console.log(error)
    }


    if(email && password) {
      const loginData = {email, password};
      try {
        const response = await axios.post('/account/login', loginData, {withCredentials: true});
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  if(redirect === true) {
    return <Navigate to={'/'}/>
  }

  return (
    <div className="py-32">
      <div className="w-2/5 mx-auto">
        <h3 className="text-2xl mb-4">Login</h3>
        <form className="flex flex-col mb-10" onSubmit={handleLoginForm}>
          <input type="email" placeholder="Email*" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
          <input type="password" placeholder="Password*" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
          <button type="submit">Sign In</button>
        </form>

        <h4 className="text-l my-2">Don't have an account?</h4>
        <Link to="/account/register">
          <button className="border w-full py-2 hover:bg-neutral-900 hover:text-white">Register an Account</button>
        </Link>
      </div>
    </div>
  )
};

export default Login;