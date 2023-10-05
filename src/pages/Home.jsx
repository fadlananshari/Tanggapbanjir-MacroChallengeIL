import React from 'react';
import Hero from '../components/Hero';
import Layanan from '../components/Layanan';
import Quote from '../components/Quote';
import Panduan from '../components/Panduan';
import Article from '../components/Article';
import Donation from '../components/Donation';

const Home = () => {
  return (
    <>
      <Hero />
      <Layanan />
      <Quote />
      <Panduan />
      <Article />
      <Donation />
    </>
  );
};

export default Home;
