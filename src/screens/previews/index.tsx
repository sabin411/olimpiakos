import React from 'react';

// components
import Drawer from '@/components/Sidebar';

// package
import { Outlet } from 'react-router-dom';

export default function Preview() {
  return (
    <div>
      <Drawer />
      {/* side nav rendered section start */}
      <Outlet />
      {/* side nav rendered section end */}
    </div>
  );
}
