import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import './globals.css'
import Head from 'next/head';
import GoogleAnalytics from '../../components/GoogleAnalytics';
import CookieBanner from '../../components/cookiebanner';
import 'tailwindcss';

const inter = Inter({ subsets: ['latin'] })
/*const poppins = Poppins({ subsets: ['latin'], weights: ['500', '800']})*/
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: 'PlainShirts',
  description: 'Elevate Your Essentials',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-XE9L0ZK53V" />
      <body className={poppins.className}>{children}<CookieBanner /></body>
    </html>
  )
}
