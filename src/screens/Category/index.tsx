import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// components
import SelectionTab from '@/components/SelectionTab';

// constants
import { categoriesData } from '@/constants';
import AppBarComp from '@/components/AppBar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

function Category() {
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

      {/* Explore new section starts */}
      <section className='my-5 container-custom'>
        <h4 className='text-neutral-400 mb-2'>{categoriesData.title}</h4>
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
