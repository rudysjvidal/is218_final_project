// pages/index.js
//import Colors from '../../components/test'; // Fix the import path

import Image from 'next/image';
import Navbar from '../../components/navbar';
import Promotion from '../../components/promotion';
import Hero from '../../components/hero';
import MensClothing from '../../components/mens_clothing';
import WomensClothing from '../../components/womens_clothing';
import About from '../../components/about';
import Slogan from '../../components/slogan';
import Footer from '../../components/footer';
import Color from '../../components/selectbycolor';
import Mailchimp from '../../components/mailchimp';
import Head from 'next/head';


export default function Home() {
  return (
    <main>
      <Promotion />
      <Navbar />
      <Hero />
      <MensClothing />
      <WomensClothing />
      <Color />
      <About />
      <Slogan />
      <Mailchimp />
      <Footer />
    </main>
  );
}
