import React from 'react';

// package
import { Outlet } from 'react-router-dom';

export default function Preview() {
  return (
    <div>
      {/* side nav rendered section start */}
      <Outlet />
      {/* side nav rendered section end */}
    </div>
  );
}
