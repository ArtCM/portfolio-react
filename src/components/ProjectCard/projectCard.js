import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import './projectCard.css';

export default function projectCard() {

    return(
        <>
            <div>
                <div className='projectCard'>
                    <div className='projectCard__image'>
                        <Image src='/images/project1.jpg' alt='Projeto 1' width={300} height={200} />
                    </div>
                    <div className='projectCard__content'>
                        <h3>Projeto 1</h3>
                        <p>Descrição do Projeto 1</p>
                        <Link href='/project1'>
                            <button>Ver Projeto</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}