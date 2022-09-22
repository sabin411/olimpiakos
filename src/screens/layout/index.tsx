import React, { useState } from 'react';

// components
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import AppBarComp from '@/components/AppBar';

// package
import Cookies from 'universal-cookie';

// assets
import dummyProfilePic from '@/assets/images/dummy.jpg';

export default function Layout() {
  const cookies = new Cookies();
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoggedIn] = useState(cookies.get('token') ? true : false);
  return (
    <main className='bg-primary-1000'>
      {/* header starts */}
      <AppBarComp
        isLoggedIn={isLoggedIn}
        onMenuClick={() => {
          setOpenMenu(true);
        }}
        profileImage={cookies.get('profilePic') ?? dummyProfilePic}
      />
      {/* header ends */}

      {/* sidebar starts */}
      <Sidebar
        isLoggedIn={isLoggedIn}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      {/* sidebar ends */}

      {/* main content starts */}
      <section className='min-h-[60vh]'>
        <Outlet />
      </section>
      {/* main content ends */}

      {/* footer starts */}
      <Footer />
      {/* footer ends */}
    </main>
  );
}
