import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className='container bg-[#F4F4f4] flex items-center flex-col justify-center min-h-[100vh]'>
            
            <form action='' className='form'>
                <h3 className='text-center text-[26px] mb-5 mt-3'>Log In</h3>
                <div className='inputBox'>
                    <input type='text' placeholder='Username' name='username' id='username'/> 
                </div>
                <div className='inputBox'>
                    <input type='password' placeholder='Password' name='password' id='password'/> 
                </div>
                <button className="btnBig mt-3 mb-3">Login</button>
                <p className='mb-3 mt-2'>Don't have An Account <Link className="text-[#578DF5]" to="/signup">Sign Up</Link></p>
            </form>
            </div> 
    </>
  )
}

export default Login
