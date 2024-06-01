import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegisterForm = async (event) => {
    event.preventDefault();

    if(!name || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields");
      return; 
    }
    if(password === confirmPassword) {
      const newUser = {name, email, password};
      
      try {
        await axios.post('/account/register', newUser);
        alert("New User Registered");
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert("Please make sure that both passwords match!")
    }
  }

  return (
    <div className="py-32">
      <div className="w-2/5 mx-auto">
        <h3 className="text-2xl mb-4">Register</h3>
        <form onSubmit={handleRegisterForm} className="flex flex-col mb-12">
          <input type="text" placeholder="Name*" value={name} onChange={(event) => setName(event.target.value)}/>
          <input type="email" placeholder="Email*" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <input type="password" placeholder="Password*" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <input type="password" placeholder="Confirm Password*" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
          <button type="submit">Create</button>
        </form>

        <h4 className="text-lg my-2">Already have an account?</h4>
        <Link to="/account/login">
          <button className="border w-full py-2 hover:bg-neutral-900 hover:text-white">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Register;