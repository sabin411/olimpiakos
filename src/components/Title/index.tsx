import React from 'react';

function Title({ title }: { title: string }) {
  return (
    <div className='text-h4 font-semi-bold border-b-primary-600 border-b-2'>
      <h1 className='w-fit border-b-secondary-800 border-b-4'>{title}</h1>
    </div>
  );
}

export default Title;
