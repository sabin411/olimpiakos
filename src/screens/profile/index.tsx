import React from 'react';

// components
import Button from '@/components/Button';

// packages
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const containerStyle = {
    backgroundColor: 'var(--primary-700)',
  };

  // handle logout
  const logout = () => {
    cookies.remove('token');
    cookies.remove('userId');
    cookies.remove('fullName');
    cookies.remove('profilePic');
    cookies.remove('ugid');
    navigate('/login');
  };

  return (
    <section className='mt-[128px]'>
      <div className='lg:w-[1030px] mx-auto'>
        <div className='flex items-start'>
          <img
            className='w-14 h-14 rounded object-cover'
            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='Default avatar'
          ></img>
          <div className='ml-4'>
            <h5 className='text-h6 font-semi-bold text-neutral-300'>
              John Doe
            </h5>
            <p className='text-s font-regular text-neutral-500'>9843528027</p>
          </div>
        </div>

        {/* main bodya sectoin starts */}
        <div className='w-full bg-primary-900 rounded-lg p-7 mt-10 flex flex-col gap-y-7'>
          {/* Full Name */}
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-s font-regular text-neutral-500'>
                Display name
              </p>
              <h5 className='text-h6 font-semi-bold text-neutral-300'>
                Sabin shrestha
              </h5>
            </div>
            <Button
              containerStyle={containerStyle}
              buttonSize='medium'
              title='Edit'
              variant='contained'
              type='button'
            />
          </div>
          {/* email */}
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-s font-regular text-neutral-500'>Email</p>
              <h5 className='text-h6 font-semi-bold text-neutral-300'>
                sherasabin@gmail.com
              </h5>
            </div>
            <Button
              containerStyle={containerStyle}
              buttonSize='medium'
              title='Edit'
              variant='contained'
              type='button'
            />
          </div>
          {/* user name */}
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-s font-regular text-neutral-500'>User Name</p>
              <h5 className='text-h6 font-semi-bold text-neutral-300'>
                sherasabin411
              </h5>
            </div>
            <Button
              containerStyle={containerStyle}
              buttonSize='medium'
              title='Edit'
              variant='contained'
              type='button'
            />
          </div>
          {/* password */}
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-s font-regular text-neutral-500'>User Name</p>
              <h5 className='text-h6 font-semi-bold text-neutral-300 flex justify-center items-center gap-x-2 py-2'>
                <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
              </h5>
            </div>
            <Button
              containerStyle={containerStyle}
              buttonSize='medium'
              title='Change'
              variant='contained'
              type='button'
            />
          </div>
        </div>
        {/* main bodya sectoin ends */}
        <Button
          containerStyle={{
            ...containerStyle,
            marginInline: 'auto',
            display: 'block',
            marginTop: '2rem',
          }}
          buttonSize='medium'
          title='Sign out'
          variant='contained'
          type='button'
          onClick={() => {
            logout();
          }}
        />
      </div>
    </section>
  );
};

export default Profile;
