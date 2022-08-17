import React from 'react';

function Title({
  title,
  containerStyle,
}: {
  title: string;
  containerStyle?: string;
}) {
  return (
    <div
      className={`font-semi-bold border-b-primary-600 border-b-2 text-neutral-200 ${containerStyle}`}
    >
      <h4 className='w-fit border-b-secondary-800 border-b-4'>{title}</h4>
    </div>
  );
}

export default Title;
