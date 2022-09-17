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
import { countries } from './common/constants';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <section className='flex h-screen'>
      <div className='flex-1 bg-primary-1000 flex flex-col items-center pt-60'>
        <div className='w-full px-6 sm:w-[70%] md:w-[100%] xl:w-[60%]'>
          <div className='w-20 h-20 mt-14'>
            <Logo />
          </div>
          <div className='text-left'>
            <h3 className='text-neutral-400'>Get Started</h3>
            <p className='text-neutral-500'>Register your account here.</p>
          </div>
          <form className=''>
            <Input label='Full Name' />
            <Input label='Email' />
            <Input label='Username' />
            <Input label='Phone Number' />
            <DropDown
              name='country'
              label='Country'
              dropDownItems={countries}
              onChange={data => console.log(data)}
            />
            <Input label='Password' />

            <FormControlLabel
              sx={{
                marginTop: '1rem',
                marginBottom: '1rem',
              }}
              control={
                <Checkbox
                  sx={{
                    color: 'var(--primary-500)',
                    '&.Mui-checked': {
                      color: 'var(--primary-500)',
                    },
                  }}
                  defaultChecked
                />
              }
              label={
                <p className='text-neutral-300'>
                  I agree to the{' '}
                  <Link
                    to='/terms-of-services'
                    className='text-secondary-800 hover:text-secondary-900'
                  >
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    to='privacy-policy'
                    className='text-secondary-800 hover:text-secondary-900'
                  >
                    {' '}
                    Privacy Policy{' '}
                  </Link>
                </p>
              }
            />
            <Button
              variant='contained'
              type='submit'
              buttonSize='large'
              containerStyle={{
                width: '100%',
                maxWidth: '100%',
              }}
              title='Register'
            />
          </form>
          <p className='mt-4 text-neutral-400 self-end text-right'>
            Already have an account?{' '}
            <Link
              to='login'
              className='text-secondary-800 hover:text-secondary-900'
            >
              Login
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
