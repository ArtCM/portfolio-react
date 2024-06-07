'use client'

import React, { useState } from 'react';
import Swal from 'sweetalert2'

import './form.css';

export default function Formulario() {

    const [contato, setContato] = useState({
        Nome: '',
        Email: '',
        Assunto: '',
        Mensagem: ''
    });

    const [errorMessages, setErrorMessages] = useState({
        NomeError: '',
        EmailError: '',
        AssuntoError: '',
        MensagemError: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        
        let hasError = false;
        const Error = { ...errorMessages };

        if (!contato.Nome){
            Error.NomeError = 'Informe o Nome';
            hasError = true;
        }
        else{
            Error.NomeError = '';
        }
        if (!contato.Email){
            Error.EmailError = 'Informe o seu Email';
            hasError = true;
        }
        else if (!validateEmail(contato.Email)) {
            Error.EmailError = 'Informe um email válido';
            hasError = true;
        }
        else{
            Error.EmailError = '';
        }
        if (!contato.Assunto){
            Error.AssuntoError = 'Informe o Assunto';
            hasError = true;
        }
        else{
            Error.AssuntoError = '';
        }
        if (!contato.Mensagem){
            Error.MensagemError = 'Informe sua mensagem';
            hasError = true;
        }
        else{
            Error.MensagemError = '';
        }

        if (hasError){
            setErrorMessages(Error);
            return;
        }

        Swal.fire({
            title: "Tudo Certo!",
            text: "Mensagem Enviada com Sucesso!",
            icon: "success"
        });

    }

    const handleChange = e => {
        setContato({ ...contato, [e.target.name]: e.target.value });
    }

    const validateEmail = email => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return(
        <>
            <form className='contactForm' onSubmit={handleSubmit}>
                <label className='font-lastica'>Fique por dentro</label>

                <input 
                    name="Nome" 
                    placeholder="Informe Seu Nome" 
                    classtype="text" 
                    onChange={handleChange}
                    value={contato.Nome}
                />
                {errorMessages.NomeError && <p className="bg-red-500 text-white font-bold rounded-md px-3">{errorMessages.NomeError}</p>}

                <input 
                    name="Email" 
                    placeholder="Informe Seu Email" 
                    classtype="text" 
                    onChange={handleChange}
                    value={contato.Email}
                />
                {errorMessages.EmailError && <p className="bg-red-500 text-white font-bold rounded-md px-3">{errorMessages.EmailError}</p>}

                <input 
                    name="Assunto" 
                    placeholder="Informe O Assunto" 
                    classtype="text" 
                    onChange={handleChange}
                    value={contato.Assunto}
                />
                {errorMessages.AssuntoError && <p className="bg-red-500 text-white font-bold rounded-md px-3">{errorMessages.AssuntoError}</p>}

                <textarea 
                    className='min-h-32 text-start' 
                    name="Mensagem" 
                    placeholder="Mensagem" 
                    classtype="text" 
                    onChange={handleChange}
                    value={contato.Mensagem}
                />
                {errorMessages.MensagemError && <p className="bg-red-500 text-white font-bold rounded-md px-3">{errorMessages.MensagemError}</p>}

                <button type='submit'>
                    Enviar
                </button>
            </form>
        </>
    )
}