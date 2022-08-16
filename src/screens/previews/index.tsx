import React, { useState } from 'react';

// components
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import AppBarComp from '@/components/AppBar';

// package
import { Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Preview() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <AppBarComp
        onMenuClick={() => {
          setOpenMenu(true);
        }}
      />
      <Button onClick={() => setOpenMenu(true)}>Open</Button>
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {/* side nav rendered section start */}
      <Outlet />
      {/* side nav rendered section end */}
      <Footer />
    </div>
  );
}
