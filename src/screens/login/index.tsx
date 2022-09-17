import React from 'react';

// component
import Input from '@/components/Input';
import Button from '@/components/Button';
import DropDown from '@/components/DropDown';

// packages
import { Checkbox, FormControl, FormControlLabel } from '@mui/material';

// image
import { Logo } from '@/global/common';

// constants
import { Link } from 'react-router-dom';
import { login } from '@/constants';

export const Login = () => {
  return (
    <section className='flex h-screen '>
      <div className='flex-1 h-full hidden md:block'>
        <img
          className='h-full w-full object-cover'
          src='https://images.unsplash.com/photo-1620739159255-1c4cb978a0f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt='login-image'
        />
      </div>
      <div className='flex-1 bg-primary-1000 flex flex-col items-center overflow-y-auto justify-center py-5'>
        <div className='w-full px-6 sm:w-[70%] md:w-[100%] xl:w-[60%]'>
          <div className='w-20 h-20'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <div className='text-left'>
            <h3 className='text-neutral-400'>{login.title}</h3>
            <p className='text-neutral-500'>{login.subTitle}</p>
          </div>
          <form className=''>
            <Input
              label={login.form.inputFields.email.label}
              name={login.form.inputFields.email.name}
              type={login.form.inputFields.email.type}
            />
            <Input
              label={login.form.inputFields.password.label}
              name={login.form.inputFields.password.name}
              type={login.form.inputFields.password.type}
            />
            <p className='my-4 text-right'>
              <Link
                className='text-neutral-300 hover:text-neutral-500'
                to={'/forgot-password'}
              >
                {login.form.forgotPassword}
              </Link>
            </p>
            <Button
              variant='contained'
              type='submit'
              buttonSize='large'
              containerStyle={{
                width: '100%',
                maxWidth: '100%',
              }}
              title={login.form.submitButton}
            />
          </form>

          <p className='mt-4 text-neutral-400 self-end text-right'>
            {login.form.forgotPassword}{' '}
            <Link
              to='login'
              className='text-secondary-800 hover:text-secondary-900'
            >
              {login.form.dontHaveAccount}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
