import { Inter } from 'next/font/google'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import Formulario from '../components/Form/form';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />

      <main className='bg-slate-950'>
        <section className='bg-image mx-auto flex justify-center flex-col px-10 py-36'>
          <h1 className='text-white font-bold mt-0 text-2xl md:text-5xl'>Arthur Correa <br/> Front-end Developer</h1>
          <Link href="./contact">
            <p className='cta p-3 w-60 text-center text-lg'>Contratar Agora</p>
          </Link>
        </section>

        <section className='container min-h-20 bg-slate-950 py-5 px-3 shadow-xl'>
          <div className='place-content-center grid grid-cols-6'>
            <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
            <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
            <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
            <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
            <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
            <Image src="/img/quem-sou.png" alt='React' width={120} height={120} />
          </div>
        </section>

        <section className='container grid grid-cols-1 md:grid-cols-2 bg-slate-950 place-content-center'>
          <div className='place-content-center grid'>
            <Image src="/img/quem-sou.png" alt='Arthur Correa' width={400} height={400} />
          </div>
          <div className='place-content-center grid'>
            <p>Quem é Arthur Correa?</p>
          </div>
        </section>

        <section className='bg-slate-950'>
          <div>
            <h2>Projetos</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 flex-wrap place-content-center w-full'>
              <div className='grid place-content-center'>
                <Image src="/img/quem-sou.png" alt='Projeto 1' width={300} height={200} />
                <h3>Projeto 1</h3>
                <p>Descrição do Projeto 1</p>
                <Link href='/project1'>
                  <button>Ver Projeto</button>
                </Link>
              </div>
              <div className='grid place-content-center'>
                <Image src="/img/quem-sou.png" alt='Projeto 2' width={300} height={200} />
                <h3>Projeto 2</h3>
                <p>Descrição do Projeto 2</p>
                <Link href='/project2'>
                  <button>Ver Projeto</button>
                </Link>
              </div>
              <div className='grid place-content-center'>
                <Image src="/img/quem-sou.png" alt='Projeto 3' width={300} height={200} />
                <h3>Projeto 3</h3>
                <p>Descrição do Projeto 3</p>
                <Link href='/project3'>
                  <button>Ver Projeto</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-slate-950'>
          <Formulario/>
        </section>
      </main>

      <Footer />
    </>

  )
}
