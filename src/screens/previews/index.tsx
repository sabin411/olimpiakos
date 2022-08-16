import React, { useState } from 'react';

// components
import useSideBar from '@/components/Sidebar';
import AppBarComp from '@/components/AppBar';

// package
import { Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Preview() {
  const [openMenu, setOpenMenu] = useState(false);
  const { toggleDrawer, Sidebar, setOpen } = useSideBar();
  return (
    <div>
      <AppBarComp
        onMenuClick={() => {
          setOpen(true);
        }}
      />
      {/* <Button onClick={() => setOpen(true)}>Open</Button> */}
      <Sidebar />
      {/* side nav rendered section start */}
      <Outlet />
      {/* side nav rendered section end */}
    </div>
  );
}
