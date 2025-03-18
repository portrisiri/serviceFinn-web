import React from 'react';
import Home from '../../pages/common/Home';
import Categories from './Categories';
import Howitworks from './Howitworks';
import Nearby from './Nearby';
import Searchbar from './Searchbar';
import Footer from './Footer';
import TopRateProvider from './TopRateProvider';
import JoinProvider from './JoinProvider';
import DocsProvider from './DocsProvider';

function HomeSections() {
  return (
    <div>
    
      <section id='first' className="scroll-mt-20 p-5 max-w-full max-h-full object-cover">
        <Searchbar/>
      </section>
      <section id='second' className='scroll-mt-20 p-10  h-full'>
        <Categories/>
      </section>
      <section id='third' className='scroll-mt-20 p-10 bg-white pb-6'>
        <Howitworks/>
      </section>
      <section id='forth' className='scroll-mt-20 p-10 h-full'>
        <Nearby/>
      </section>
      <section id='fifth' className='scroll-mt-20 p-10 h-full'>
        <TopRateProvider/>
      </section>
      <section id='sixth' className='scroll-mt-20 p-10 h-full'>
      <JoinProvider/>
      </section>
      <section id='seventh' className='scroll-mt-20 p-10 h-full bg-[#E0E0E0]'>
      <DocsProvider/>
      </section>
      <Footer/>
    </div>
  );
}

export default HomeSections;