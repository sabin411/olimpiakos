import React, { useState } from 'react';

// components
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import AppBarComp from '@/components/AppBar';

export default function Layout() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <main className='bg-primary-1000'>
      {/* header starts */}
      <AppBarComp
        onMenuClick={() => {
          setOpenMenu(true);
        }}
      />
      {/* header ends */}

      {/* sidebar starts */}
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {/* sidebar ends */}

      {/* main content starts */}
      <Outlet />
      {/* main content ends */}

      {/* footer starts */}
      <Footer />
      {/* footer ends */}
    </main>
  );
}
