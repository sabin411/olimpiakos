import React from 'react';

// packages
import { toast } from 'react-toastify';

// types
import { ToastProps } from './type';

export const showToast = ({
  title,
  subTitle,
  type,
  position,
  disableIcon,
  link,
}: ToastProps) => {
  const Toast = () => {
    function getBorderColor() {
      switch (type) {
        case 'success':
          return 'before:bg-success-500';
        case 'error':
          return 'before:bg-error-500';
        case 'warning':
          return 'before:bg-warning-500';
        default:
          return 'before:bg-primary-500';
      }
    }

    return (
      <div
        className={`
    before:content-[''] 
    before:w-[6px]
    before:h-full 
    before:absolute
    before:top-0 
    before:left-0 
    ${getBorderColor()}
    `}
      >
        <a href={link || undefined}>
          <h2 className='text-p text-neutral-900 font-semi-bold'>{title}</h2>
          {subTitle && (
            <p className='mt-1 text-s text-neutral-700'>{subTitle}</p>
          )}
        </a>
      </div>
    );
  };

  const options = {
    position: position || 'top-right',
    autoClose: 5000,
    icon: disableIcon ? false : true,
    hideProgressBar: true,
  };

  function triggerToast() {
    switch (type) {
      case 'success':
        return toast.success(<Toast />, options);
      case 'warning':
        return toast.warning(<Toast />, options);
      case 'error':
        return toast.error(<Toast />, options);
      case 'info':
        return toast.info(<Toast />, options);
      default:
        return toast(<Toast />, options);
    }
  }

  const notify = triggerToast();
  return notify;
};
