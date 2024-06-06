import { Inter } from 'next/font/google'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />

      <main className='bg-image'>
        <section className='container mx-auto flex justify-center flex-col px-10 py-36'>
          <h1 className='text-white font-bold mt-0 text-2xl md:text-5xl'>Arthur Correa <br/> Front-end Developer</h1>
          <Link href="./contact">
            <p className='cta p-3 w-60 text-center text-lg'>Contratar Agora</p>
          </Link>
        </section>
      </main>

      <Footer />
    </>

  )
}
