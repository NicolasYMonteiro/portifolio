// components/AboutSection.tsx
"use client";

import Image from "next/image";

const eventos = [
    {
        titulo: "Mar 2020 – Dez 2024",
        subtitulo: "Fundação Técnica no IFBA",
        descricao:
            `Minha jornada na tecnologia começou no Instituto Federal da Bahia, onde construí uma base sólida em TI sob orientação de doutores e especialistas. 
            Esta formação multidisciplinar me proporcionou a visão técnica que hoje aplico em análise de dados e desenvolvimento de software.`,
        imagem: "/about/1.jpg",
    },
    {
        titulo: "Abr 2024 – Jul 2024",
        subtitulo: "Imersão em Redes e Automação",
        descricao:
            `Como estagiário em infraestrutura de TI, mergulhei no mundo de redes corporativas e segurança cibernética. 
            Destaquei-me ao desenvolver uma solução de automação em Python que otimizou processos operacionais, 
            demonstrando minha capacidade de unir programação à resolução de problemas complexos.`,
        imagem: "/about/2.jpg",
    },
    {
        titulo: "Ago 2024 – Mai 2025",
        subtitulo: "Pronto Afeto: Tecnologia com Impacto Social",
        descricao:
            `Como desenvolvedor full-stack no projeto Pronto Afeto (EmbrapII/IFBA), atuei na criação de uma plataforma de saúde mental usando Next.js e Spring Boot. 
            Colaborei com profissionais seniores para entregar uma solução escalável que impacta positivamente a vida das pessoas.`,
        imagem: "/about/3.jpg",
    },
    {
        titulo: "Mar 2025 – Atualmente",
        subtitulo: "UFBA: Bacharelado em Estatística",
        descricao:
            `Decidi aprofundar minha base matemática na UFBA para evoluir de desenvolvedor para cientista de dados. 
            O curso me proporciona o rigor analítico necessário para construir modelos estatísticos robustos e soluções de IA com fundamentação teórica sólida.`,
        imagem: "/about/4.jpg",
    },
    {
        titulo: "Ago 2025 – Atualmente",
        subtitulo: "Estatístico no Ministério da Saúde",
        descricao:
            `Atuo como bolsista aplicando análise estatística avançada para impactar políticas públicas de saúde. 
            Transformo dados complexos do SUS em insights acionáveis, contribuindo para a tomada de decisão em escala nacional e 
            desenvolvendo expertise em saúde pública e análise de dados governamentais.`,
        imagem: "/about/5.png",
    }
];

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-zinc-800 uppercase">Sobre Mim</h2>
                <p className="text-zinc-500 text-xl italic mt-2">
                    Minha trajetória como desenvolvedor
                </p>
            </div>

            <div
                className="relative max-w-5xl mx-auto px-4 before:absolute before:top-0 before:bottom-0 
      before:w-1 before:ml-14 md:before:ml-0 before:bg-zinc-300 before:left-6 md:before:left-1/2 
      md:before:transform md:before:-translate-x-1/2 before:z-0"
            >
                {eventos.map((evento, index) => {
                    const isRight = index % 2 === 0;

                    return (
                        <div key={index} className="mb-12 relative md:flex md:items-start">
                            {/* Imagem sobre a linha */}
                            <div
                                className={`
                  absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2
                  w-20 h-20 md:w-24 md:h-24 rounded-full border-6 border-gray-300 shadow-lg 
                  bg-white z-10
                `}
                            >
                                <Image
                                    src={evento.imagem}
                                    alt={evento.subtitulo}
                                    width={80}
                                    height={80}
                                    className="object-cover w-full h-full rounded-full"
                                />
                            </div>

                            {/* Bloco de texto */}
                            <div
                                className={`
                  mt-4 pt-2 md:pt-0 md:w-1/2 px-10 ml-20
                  ${isRight ? "md:pl-16 md:text-left" : "md:pr-16 md:text-right md:ml-0"}
                  ${isRight ? "md:ml-auto" : "md:mr-auto"}
                  
                `}
                            >
                                <h4 className="text-zinc-900 font-bold text-2xl italic">{evento.titulo}</h4>
                                <h5 className="text-zinc-700 font-semibold text-xl mt-1">{evento.subtitulo}</h5>
                                <p className="text-zinc-600 mt-2 text-lg text-justify">{evento.descricao}</p>
                            </div>
                        </div>
                    );
                })}

                {/* Bloco final */}
                <div className="flex md:justify-center mt-20 relative">
                    <div
                        className="w-32 h-32 rounded-full bg-yellow-400 text-white border-gray-200 
          border-8 flex flex-col items-center justify-center text-center text-md font-bold p-4 hover:bg-yellow-500
          transition duration-300 ease-in-out shadow-lg"
                    >
                        <a href="https://www.linkedin.com/in/n%C3%ADcolas-monteiro-5237b2282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            Seja parte da minha história!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
