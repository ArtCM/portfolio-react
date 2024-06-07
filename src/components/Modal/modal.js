'use client'

import React from 'react';
import './modal.css';
import Image from 'next/image';

export default function Modal({ modalImage }) {

    return(
        <>
            <div className='modal-block'>
                <Image src={modalImage} alt='Projeto Modal' width={500} height={600} />
            </div>
        </>
    )
}