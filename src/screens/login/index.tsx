import React from 'react';

//styles
import './style.css';

//images
import { Logo } from '@/global/common';

function Login() {
  return (
    <section>
      <div className='w-1/2'>
        <img
          className='w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1620739159255-1c4cb978a0f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt=''
        />
      </div>

      <div className='form_wrapper'>
        <form className='form_content'>
          <div className='logo'>
            <Logo />
          </div>

          <div className='input_wrapper'>
            <input type='email' name='Email' placeholder='Email Here' id='' />
            <p className='mt-1'>Supporting Text</p>
          </div>

          <div className='input_wrapper'>
            <input type='password' name='' placeholder='Password here' id='' />
            <p className='mt-1'>Supporting Text</p>
          </div>

          <div className='forgotPswd-wrapper'>
            <a href='#'>Forgot Password?</a>
          </div>

          <div className='terms_wrapper'>
            <input type='checkbox' name='' id='terms-condition' />
            <label className='text-neutral-300' htmlFor='terms-condition'>
              I agree to the{' '}
              <span>
                <a className='text-secondary-800' href='#'>
                  Terms of service
                </a>
              </span>{' '}
              and{' '}
              <span>
                <a className='text-secondary-800' href='#'>
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>

          <button className='login_button'>Login</button>

          <div className='signup'>
            <p>
              Don't have an account? <a href='#'>Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
