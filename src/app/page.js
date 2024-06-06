import { Inter } from 'next/font/google'
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <h1 className='text-primary'>Hello</h1>
      </main>

      <Footer />
    </>

  )
}
