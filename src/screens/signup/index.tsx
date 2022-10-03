import React from 'react';

// packages
import { Link } from 'react-router-dom';

// image
import { Logo } from '@/global/common';

// constants
import { signUp } from '@/constants/en';

// global
import { SigninForm } from './common/SigninForm';

export const Signup = () => {
  return (
    <section className='flex h-screen '>
      <div className='flex-1 bg-primary-1000 flex flex-col items-center overflow-y-auto py-16 md:py-5'>
        <div className='w-full px-6 sm:w-[70%] md:w-[100%] xl:w-[60%]'>
          <div className='w-20 h-20'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <div className='text-left'>
            <h3 className='text-neutral-400'>{signUp.title}</h3>
            <p className='text-neutral-500'>{signUp.subTitle}</p>
          </div>
          {/* form starts here */}
          <SigninForm />
          {/* form ends here */}
          <p className='mt-4 text-neutral-400 self-end text-right'>
            {signUp.form.alreadyHaveAccount}{' '}
            <Link
              to='/login'
              className='text-secondary-800 hover:text-secondary-900'
            >
              {signUp.form.login}
            </Link>
          </p>
        </div>
      </div>
      <div className='flex-1 h-full hidden md:block'>
        <img
          className='h-full w-full object-cover'
          src='https://images.unsplash.com/photo-1620739159255-1c4cb978a0f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt='signup-image'
        />
      </div>
    </section>
  );
};

export default Signup;
