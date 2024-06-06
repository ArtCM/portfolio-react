import Link from 'next/link'
import Image from 'next/image'
import React from 'react';

export default function Header() {

    return(
        <>
            <header>
                <nav className='bg-slate-950 flex items-center justify-between py-3 px-5'>
                    <Link href="./">
                        <Image src="/img/logo.webp" alt="Logo" width={150} height={75} />
                    </Link>

                    <ul className='justify-center items-center hidden md:flex'>
                        <li className='transition-all'>
                            <Link href="./">Inicio</Link>
                        </li>
                        <li className='transition-all'>
                            <Link href="./about">Sobre</Link>
                        </li>
                        <li className='transition-all'>
                            <Link href="./services">Projetos</Link>
                        </li>
                        <li className='transition-all cta'>
                            <Link href="./contact">Entre em Contato</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}