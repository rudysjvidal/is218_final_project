import Image from 'next/image'
import Promotion from '../../components/promotion';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import MensClothing from '../../components/mens_clothing';



export default function Home() {
  return (
    <main>
      <Promotion />
      <Navbar />
      <Hero />
      <MensClothing />

    </main>
  )
}
