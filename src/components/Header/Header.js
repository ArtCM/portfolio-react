'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react';
import { useState } from 'react';

import './header.css';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
            <header>
                <nav className='bg-black flex items-center justify-between py-3 px-10'>
                    <Link href="./">
                        <Image src="/img/logo.webp" alt="Logo" width={150} height={75} />
                    </Link>

                    <ul className='justify-center items-center hidden md:flex'>
                        <Link href="#stacks"><li className='transition-all'>Stacks</li></Link>
                        <Link href="#quem-sou"><li className='transition-all'>Sobre</li></Link>
                        <Link href="#projetos"><li className='transition-all'>Projetos</li></Link>
                        <Link href="#contact-form"><li className='transition-all cta text-white'>Entre em Contato</li></Link>
                    </ul>

                    <div className='lg:hidden'>
                        <button onClick={toggleMenu} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>

                    </div>
                </nav>
                <div className={`lg:hidden ${isMenuOpen ? '' : 'hidden'}` }>
                    <div className="nav-mob flex flex-col items-center justify-center space-y-1 px-2 py-8 bg-primary/90 z-[100] absolute w-full shadow-xl">
                        <Link href="#quem-sou" className='transition-all'>Sobre</Link>
                        <br/>
                        <Link href="#stacks" className='transition-all'>Stacks</Link>
                        <br/>
                        <Link href="#projetos" className='transition-all'>Projetos</Link>
                        <br/>
                        <Link href="#contact-form" className='transition-all'>Entre em Contato</Link>
                    </div>
                </div>
            </header>
        </>
    )
}