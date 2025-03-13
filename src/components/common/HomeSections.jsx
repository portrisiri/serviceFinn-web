import React from 'react';
import Home from '../../pages/common/Home';
import Categories from './Categories';
import Howitworks from './Howitworks';
import Nearby from './Nearby';
import Searchbar from './Searchbar';
import Footer from './Footer';

function HomeSections() {
  return (
    <div>
    
      <section id='first' className="scroll-mt-20 p-10">
        <Searchbar/>
      </section>
      <section id='second' className='scroll-mt-20 p-10 bg-sky-300 h-80'>
        <Categories/>
      </section>
      <section id='third' className='scroll-mt-20 p-10 bg-sky-500 h-80'>
        <Howitworks/>
      </section>
      <section id='forth' className='scroll-mt-20 p-10 bg-sky-700 h-80'>
        <Nearby/>
      </section>
      <Footer/>
    </div>
  );
}

export default HomeSections;