// components/PortfolioSection.tsx
"use client";

import Image from "next/image";

const projetos = [
    {
      titulo: "Atlas Desenvolvimento",
      descricao:
        "Plataforma para organização de tarefas e acompanhamento de metas pessoais, com foco em produtividade e gestão do tempo.",
      imagem: "/portfolio/graficos.jpeg",
      alt: "Tela Inicial do Atlas",
      link: "#", // link para GitHub ou deploy
      stack: "(Angular + Node.js)",
    },
    {
      titulo: "Pronto Afeto",
      descricao:
        "Sistema completo de agendamento de serviços domiciliares, conectando clientes a cuidadores profissionais de forma eficiente e segura.",
      imagem: "/portfolio/medico.jpg",
      alt: "Agendamento médico",
      link: "#", // link para GitHub ou deploy
      stack: "(Next.js + Spring Boot)",
    },
  ];
  

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-zinc-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-zinc-800">
            Portfólio
          </h2>
          <p className="text-zinc-600 text-xl mt-4 max-w-2xl mx-auto">
            Projetos práticos que refletem minha experiência em desenvolvimento
            Full Stack e análise de dados.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-52">
                  <Image
                    src={projeto.imagem}
                    alt={projeto.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-zinc-800">
                    {projeto.titulo}
                  </h3>
                  <p className="text-md text-zinc-500 mb-1 mt-1">{projeto.stack}</p>
                  <p className="text-zinc-600 text-md">{projeto.descricao}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
