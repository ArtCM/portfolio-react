'use client'

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from '../Modal/modal';

import './projectCard.css';

export default function ProjectCard( {isClose, title, content, image, modalimg} ) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return(
        <>
            <div className='grid place-content-start justify-center card'>
                <button className='card__overlay hidden' onClick={isClose ? null : toggleModal}>
                    {isClose ? 'Em Construção' : 'Ver Projeto'}
                </button>
                <div  className={`${isClose ? 'cardClose' : 'hidden'} place-content-center`}>
                    <Image src="/img/jail.png" alt='Projeto 1' width={300} height={200} />
                </div>
                <div className='card__content grid place-content-center'>
                    <Image src={`${isClose ? '/img/comimg-soon.webp' : image}`} alt='Projeto' width={500} height={600} />
                    <h3>{`${isClose ? 'Em Construção' : title}`}</h3>
                    <p>{`${isClose ? 'Mais informações em breve' : content}`}</p>
                </div>
            </div>

            <div className={`${isModalOpen ? 'flex' : 'hidden'} modaldiv`}>
                <button onClick={toggleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} fill='#fff' viewBox="0 0 512 512"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"/></svg>
                </button>
                <Modal 
                    modalImage={modalimg} 
                />
            </div>
        </>
    )
}