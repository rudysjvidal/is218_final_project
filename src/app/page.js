import Image from 'next/image'
import Promotion from '../../components/promotion';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';


export default function Home() {
  return (
    <main>
      <Promotion />
      <Navbar />
      <Hero />
    </main>
  )
}
