'use client'

import React from 'react';

import './form.css';

export default function Formulario() {

    return(
        <>
            <form className='contactForm '>
                <label>Entre em Contato</label>
                <input name="Nome" placeholder="Informe Seu Nome" classtype="text" />
                <input name="Email" placeholder="Informe Seu Email" classtype="text" />
                <input name="Numero" placeholder="Informe Seu Telefone" classtype="number" />
                <button>
                    Enviar
                </button>
            </form>
        </>
    )
}