
'use client';

import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        const { name, email, phone, message } = formData;

        if (!name || !email || !phone || !message) {
            setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, message }),
            });

            if (response.ok) {
                setSuccessMessage('Mensagem enviada com sucesso!');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                throw new Error('Erro ao enviar a mensagem.');
            }
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message || 'Erro ao enviar a mensagem.');
            } else {
                setErrorMessage('Erro ao enviar a mensagem.');
            }
        }
    };


    return (
        <section
            id="contact"
            className="relative bg-[#1b212b] bg-[url('/map-image.png')] bg-no-repeat bg-cover bg-center pt-20 pb-12 px-4"
        >
            {/* Fundo escuro sobre a imagem */}
            <div className="absolute inset-0 z-0" />

            {/* Conteúdo */}
            <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
                <h2 className="text-4xl font-bold uppercase">Contato</h2>
                <p className="mt-2 italic text-2xl text-gray-300">
                    Envie sua mensagem e retornarei o mais breve possível.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-12 grid md:grid-cols-2 gap-6 text-left text-lg"
                >
                    <div className="flex flex-col gap-4">
                        <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Seu nome *"
                            className="px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                        <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Seu e-mail *"
                            className="px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                        <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Seu telefone *"
                            className="px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Sua mensagem *"
                        className="px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-400 h-full min-h-[190px] focus:outline-none"
                    />

                    <div className="md:col-span-2 text-center">
                        <button
                            type="submit"
                            className="bg-yellow-600/80 hover:bg-yellow-600/100 text-white font-semibold px-8 py-3 mt-2 rounded uppercase tracking-wider transition"
                        >
                            Enviar Mensagem
                        </button>

                        {successMessage && (
                            <p className="mt-4 text-green-400 font-medium">{successMessage}</p>
                        )}
                        {errorMessage && (
                            <p className="mt-4 text-red-400 font-medium">{errorMessage}</p>
                        )}
                    </div>
                </form>
            </div>
            <div className="relative z-10 max-w-5xl mx-auto text-center text-white mt-12">
                <p className="italic text-2xl text-gray-300">
                    Você também pode enviar uma mensagem diretamente para o e-mail: {'nicolasmonteiro0123@gmail.com'}
                </p>
            </div>

        </section>

    );
};

export default Contact;
