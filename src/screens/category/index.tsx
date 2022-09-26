import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// components
import SelectionTab from '@/components/SelectionTab';

// packages
import Cookies from 'universal-cookie';

// constants
import { categoriesData } from '@/constants/en';
import AppBarComp from '@/components/AppBar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

// assets
import dummyProfilePic from '@/assets/images/dummy.jpg';
import { useTranslation } from 'react-i18next';

function Category() {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const cookies = new Cookies();
  const [isLoggedIn] = useState(cookies.get('token') ? true : false);

  return (
    <main className='bg-primary-1000'>
      {/* header starts */}
      <AppBarComp
        profileImage={cookies.get('profilePic') ?? dummyProfilePic}
        onMenuClick={() => {
          setOpenMenu(true);
        }}
        isLoggedIn={isLoggedIn}
      />
      {/* header ends */}

      {/* sidebar starts */}
      <Sidebar
        isLoggedIn={isLoggedIn}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      {/* sidebar ends */}

      {/* Explore new section starts */}
      <section className='my-5 container-custom'>
        <h4 className='text-neutral-400 mb-2'>{t('categoriesData.title')}</h4>
        <SelectionTab items={categoriesData.items} />
      </section>
      {/* Explore new section ends */}

      {/* main content starts */}
      <Outlet />
      {/* main content ends */}

      {/* footer starts */}
      <Footer />
      {/* footer ends */}
    </main>
  );
}

export default Category;
