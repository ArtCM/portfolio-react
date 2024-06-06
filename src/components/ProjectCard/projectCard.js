'use client'

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import './projectCard.css';

export default function ProjectCard( {isClose, title, content, ctaLink, image} ) {
    return(
        <>
            <div className='grid place-content-start justify-center card'>
                <div className='card__overlay hidden'>
                    <Link href={`${isClose ? '' : ctaLink}`}>
                        {isClose ? 'Em Construção' : 'Ver Projeto'}
                    </Link>
                </div>
                <div  className={`${isClose ? 'cardClose' : 'hidden'} place-content-center`}>
                    <Image src="/img/jail.png" alt='Projeto 1' width={300} height={200} />
                </div>
                <div className='card__content grid place-content-center'>
                    <Image src={`${isClose ? '/img/comimg-soon.jpg' : image}`} alt='Projeto' width={300} height={500} />
                    <h3>{`${isClose ? 'Em Construção' : title}`}</h3>
                    <p>{`${isClose ? 'Mais informações em breve' : content}`}</p>
                </div>
            </div>
        </>
    )
}