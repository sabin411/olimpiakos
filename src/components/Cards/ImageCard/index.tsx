import React from 'react';

const ImageCard = ({
  image,
  containerStyle,
}: {
  image: string;
  containerStyle?: string;
}) => {
  return (
    <div
      className={`w-full h-full rounded-lg overflow-hidden bg-neutral-400 ${containerStyle}`}
    >
      <img
        className='w-full h-full object-cover'
        src={image}
        alt={'image of ' + image}
      />
    </div>
  );
};

export default ImageCard;
