import React from 'react';

// component
import Input from '@/components/Input';

// packages
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

// image
import { Logo } from '@/global/common';

export const Signup = () => {
  return (
    <section className='flex h-screen'>
      <div className='flex-1 bg-primary-1000 flex flex-col  items-center '>
        <div className='w-24 h-24 mt-56'>
          <Logo />
        </div>
        <div className='w-[50%]'>
          <Input label='Full Name' />
          <Input label='Email' />
          <Input label='Phone Number' />
          <Select
            sx={{
              '& .MuiInputBase-root': {
                color: '#6EC177',
                borderColor: '#6EC177',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '100px',
                minWidth: '120px',
                justifyContent: 'center',
              },
              '& .MuiSelect-select.MuiSelect-select': {
                paddingRight: '0px',
              },
              '& .MuiInputBase-input': {
                color: 'var(--primary-400)',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'var(--primary-400)',
              },
              '& .MuiFormLabel-root': {
                color: 'var(--primary-400)',
              },
              '& .MuiSvgIcon-root': {
                color: 'var(--primary-400)',
              },
            }}
            label='Country'
            fullWidth
            margin='dense'
            placeholder='Country'
          >
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          <Input label='Password' />
        </div>
      </div>
      <div className='flex-1 h-full'>
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
