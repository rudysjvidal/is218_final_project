import Image from 'next/image'
import Promotion from '../../components/promotion';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import MensClothing from '../../components/mens_clothing';
import WomensClothing from '../../components/womens_clothing';
import Color from '../../components/selectbycolor';
import About from '../../components/about';
import Slogan from '../../components/slogan';
import Mailchimp from '../../components/mailchimp';
import Footer from '../../components/footer';





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
  )
}
