import Image from 'next/image'
import Promotion from '../../components/promotion';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import MensClothing from '../../components/mens_clothing';
import WomensClothing from '../../components/womens_clothing';
import Color from '../../components/selectbycolor';





export default function Home() {
  return (
    <main>
      <Promotion />
      <Navbar />
      <Hero />
      <MensClothing />
      <WomensClothing />
      <Color />

    </main>
  )
}
