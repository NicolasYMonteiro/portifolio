// components/AboutSection.tsx
"use client";

import Image from "next/image";

const eventos = [
    {
        titulo: "Mar 2020 – Dez 2024",
        subtitulo: "Início dos meus estudos em Tecnologia da Informação",
        descricao:
            `Meu primeiro contato com a área de TI foi no Instituto Federal da Bahia (IFBA), onde estudei diversas áreas da tecnologia. 
            Durante o curso, tive a oportunidade de aprender com doutores e especialistas renomados que enriqueceram minha formação.`,
        imagem: "/about/1.jpg",
    },
    {
        titulo: "Abr 2024 – Jul 2024",
        subtitulo: "Estágio em Redes e Segurança",
        descricao:
            `Durante um estágio de 3 meses em uma provedora de Internet, atuei na área de redes e segurança. Aprendi na prática sobre 
            infraestrutura, configuração de redes e proteção de dados, vivenciando o dia a dia técnico de um provedor.`,
        imagem: "/about/2.jpg",
    },
    {
        titulo: "Ago 2024 – Mai 2025",
        subtitulo: "Pronto Afeto: um projeto para a saúde",
        descricao:
            `Participação no projeto "Pronto Afeto", desenvolvido em parceria com o Instituto Federal da Bahia. Utilizando Next.js e 
            Spring Boot, contribuí para a criação de uma plataforma com impacto social positivo, colaborando com profissionais experientes.`,
        imagem: "/about/3.jpg",
    },
    {
        titulo: "Mar 2025 – Atualmente",
        subtitulo: "UFBA: Início do Bacharelado em Estatística",
        descricao:
            `Iniciei o bacharelado em Estatística na Universidade Federal da Bahia (UFBA) com o objetivo de fortalecer minha base matemática e desenvolver habilidades avançadas em análise de dados. 
            Ao integrar tecnologia, estatística e programação, busco me tornar um profissional completo, capaz de transformar dados em soluções inteligentes e atuar com profundidade nas áreas de Inteligência Artificial e ciência de dados.`,
        imagem: "/about/4.jpg",
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
                <div className="flex md:justify-center mt-20 z-50 relative">
                    <div
                        className="w-32 h-32 rounded-full bg-yellow-400 text-white border-gray-200 
          border-8 flex flex-col items-center justify-center text-center text-md font-bold px-2"
                    >
                        Seja parte <br /> da minha <br /> história!
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
