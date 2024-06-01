import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="py-32">
      <div className="w-2/5 mx-auto">
        <h3 className="text-2xl mb-4">Login</h3>
        <form className="flex flex-col mb-10">
          <input type="email" placeholder="Email*"/>
          <input type="password" placeholder="Password*"/>
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