import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';


const MainPage = () => {
  return (
    <div className='dark:bg-zinc bg-black duration-[500ms] pb-10' >
      <Header />
      <Outlet />
    </div>
  );
};

export default MainPage;
