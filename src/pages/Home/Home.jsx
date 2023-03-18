import React from 'react';
import './Home.scss';
import Header from '../../components/header/header';
import Addnew from '../../components/addnew/addnew';
import Tasks from '../../components/tasks/tasks';
import Footer from '../../components/footer/footer';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <Addnew />
      <Tasks />
      <Footer />
    </div>
  );
}
