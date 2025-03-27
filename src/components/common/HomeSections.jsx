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
import InfiniteCarousel from './Test';
import HeroBanner from './Test';
import BannerImages from './BannerImages';

function HomeSections() {
  return (
    <div>
      <section id="search" className="scroll-mt-20 p-5 max-w-full max-h-full object-cover">
        <Searchbar />
      </section>

      {/* <div className="w-[90%] mx-auto overflow-hidden">
        <HeroBanner />
      </div> */}

      <section id="categories" className="scroll-mt-20 p-10  h-full">
        <Categories />
      </section>
      <section id="how-it-works" className="scroll-mt-20 p-10 bg-white">
        <Howitworks />
      </section>
      <section id="nearby" className="scroll-mt-20 p-10 h-full">
        <Nearby />
      </section>
      <section id="top-provider" className="scroll-mt-20 p-10 h-full">
        <TopRateProvider />
      </section>
      <section id="join-service-provider" className="scroll-mt-20 p-10 h-full"
      style={{backgroundImage: 'url(/cover-regisprovider.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <JoinProvider />
      </section>
      <section id="docs-for-joining" className="scroll-mt-20 p-10 h-full bg-[#E0E0E0]"
      style={{backgroundImage: 'url(/cover-docs.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <DocsProvider />
      </section>
      <Footer />
    </div>
  );
}

export default HomeSections;
