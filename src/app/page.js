import { Inter } from 'next/font/google'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';
import Formulario from '../components/Form/form';
import ProjectCard from './../components/ProjectCard/projectCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />

      {/* Whatsapp */}
      <div className='cta-whatsapp shake-effect z-20'>
        <Link href='https://wa.me/5537998727252' target="blank">
          <Image src="/img/whats.webp" alt='Arthur Correa' width={400} height={400} />
        </Link>
      </div>

      <main className='bg-gradient-to-r from-bg-griant-1 from-5% to-slate-950 to-80%'>
        <section className='bg-image flex justify-center flex-col px-10 py-36'>
          <div className='container mx-auto'>
            <h1 className='text-white font-bold mt-0 text-2xl md:text-5xl'>Arthur Correa <br/> Front-end Developer</h1>
            <Link href="#contact-form">
              <p className='cta p-3 w-60 text-center text-lg'>Contratar Agora</p>
            </Link>
          </div>
        </section>

        <section className='min-h-20 bg-black py-5 px-3 shadow-xl shadow-black w-full' id='stacks'>
          <div className='container mx-auto'>
            <div className='place-content-center justify-center items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
              <Image className='mx-auto my-3 ' src="/img/react.webp" alt='React' width={120} height={120} />
              <Image className='mx-auto my-3 ' src="/img/angular.webp" alt='Angular' width={120} height={120} />
              <Image className='mx-auto my-3 ' src="/img/next.webp" alt='Next' width={120} height={120} />
              <Image className='mx-auto my-3 ' src="/img/typescript.webp" alt='Typescript' width={120} height={120} />
              <Image className='mx-auto my-3 ' src="/img/mongo.webp" alt='Mongo' width={120} height={120} />
              <Image className='mx-auto my-3 ' src="/img/node.webp" alt='Node' width={120} height={120} />
            </div>
          </div>
        </section>

        <section className='container mx-auto' id='quem-sou'>
          <div className='grid grid-cols-1 lg:grid-cols-2 py-20 px-10 lg:px-0 place-content-center'>
            <div className='place-content-center grid mb-5 lg:mb-0'>
              <Image src="/img/quem-sou.webp" alt='Arthur Correa' width={400} height={400} />
            </div>
            <div className='quem-sou place-content-center grid'>
              <h2 className='mb-5 font-bold text-white text-2xl'>QUEM É ARTHUR CORRA?</h2>
              <p className='leading-7 mb-10'>
                Graduando em Engenharia da Computação e Desenvolvedor Front-end a mais de 3 anos. Arthur é um profissional que busca sempre por desempenho e qualidade em seus projetos, com mais de 100 sites entregues e diversos projetos. Traballha atualmente com React e Next, possue conhecimento em back-end, react hooks, solid, arquitetura, api rest, entre outros.
              </p>
              <Link className='cta w-60 py-3 text-center text-lg' href="#contact-form">
                Entrar em Contato
              </Link>
            </div>
          </div>
        </section>

        <section className='bg-black shadow-xl shadow-black' id='projetos'>
          <div className='container mx-auto grid pb-20 my-5'>
            <h2 className='text-center text-2xl py-10 font-bold'>PROJETOS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 flex-wrap place-content-center justify-items-center w-full'>

              <ProjectCard 
                title='Calculadora'
                content='Em Breve!'
                image='/img/projeto-1.webp'
                modalimg='/img/projeto-1.webp'
                ctaLink='#'
              />

              <ProjectCard 
                title='Loja virtual'
                content='Projeto concluido com Angular'
                image='/img/projeto-2.webp'
                modalimg='/img/projeto-2.webp'
                ctaLink='#'
              />

              <ProjectCard 
                title='Projeto 3'
                content='Lorem Ipsum in dolor'
                image='/img/quem-sou.png'
                modalimg='/img/quem-sou.png'
                ctaLink='#'
                isClose={true}
              />

            </div>
          </div>
        </section>

        <section id='contact-form'>
          <div className='container mx-auto py-10'>
            <div className='form-div max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 pb-10 py-5 items-center justify-center'>
              <div className='w-full place-items-end h-full hidden lg:flex'>
                <Image src="/img/contact-form.webp" alt='Entre em Contato!' width={300} height={600} />
              </div>
              <div className='w-full place-items-start h-full'>
                <Formulario/>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>

  )
}
