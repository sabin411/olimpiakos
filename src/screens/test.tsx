import React from 'react';

import { showToast } from '@/utils/Toast/toast';

const Text = () => {
  return (
    <div>
      <button
        onClick={e => {
          console.log(e.target);
          //   notify();
          showToast({
            disableIcon: true,
            title: 'Terms and conditions not checked',
            subTitle:
              'Please indicate that you have read and agree to the Terms of Service and Privacy Policy.',
            position: 'top-right',
            link: '/tags-preview',
            type: 'success',
          });
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Text;
