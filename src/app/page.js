import Image from 'next/image'
import Promotion from '../../components/promotion';
import Navbar from '../../components/navbar'

export default function Home() {
  return (
    <main>
      <Promotion />
      <Navbar />
    </main>
  )
}
