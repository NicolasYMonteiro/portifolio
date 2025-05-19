"use client";

import Image from "next/image";
import Modal from "./modal";
import { useState } from "react";

interface projeto {
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
  alt: string;
  github?: string; // opcional
  site?: string;   // opcional
  tecnologias: string[];
  data: string;
}

const projetos: projeto[] = [
  {
    titulo: "Atlas Desenvolvimento",
    subtitulo: "Gestão de Tarefas",
    descricao:
      "Plataforma para organização de tarefas e acompanhamento de metas pessoais, com foco em produtividade e gestão do tempo.",
    imagem: "/portfolio/graficos.jpeg",
    alt: "Tela Inicial do Atlas",
    github: "#", // link para GitHub ou deploy
    tecnologias: ["Angular", "Node.js"],
    data: "2024",
  },
  {
    titulo: "Pronto Afeto",
    subtitulo: "Gestão de Tarefas",
    descricao: `Sistema completo de agendamento de serviços domiciliares, conectando clientes a cuidadores profissionais de 
    forma eficiente e segura. Projeto encomendado pela a empresa Pronto Afeto.`,
    imagem: "/portfolio/medico.jpg",
    alt: "Agendamento médico",
    site: "#", // link para GitHub ou deploy
    tecnologias: ["(Next.js ", "e Spring Boot)"],
    data: "2024",
  },
];


const Portfolio = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState<projeto | null>(null);

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
              className="relative group shadow-md rounded-lg bg-white overflow-hidden hover:shadow-xl hover:scale-101 transition duration-300"
            >
              <button onClick={() => setProjetoSelecionado(projeto)} className="w-full h-full text-left flex flex-col">
                {/* Imagem com Overlay */}
                <div className="relative w-full h-52">
                  <Image
                    src={projeto.imagem}
                    alt={projeto.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Ver detalhes</span>
                  </div>
                </div>

                {/* Conteúdo do card */}
                <div className="p-4 text-center bg-white">
                  <h3 className="text-xl font-semibold text-zinc-800">{projeto.titulo}</h3>
                  <p className="text-md text-zinc-500 mb-1 mt-1">{projeto.tecnologias}</p>
                  <p className="text-zinc-600 text-md">{projeto.descricao}</p>
                </div>
              </button>
            </div>
          ))}


        </div>
      </div>

      {projetoSelecionado && (
        <Modal projeto={projetoSelecionado} onClose={() => setProjetoSelecionado(null)} />
      )}
    </section>
  );
};

export default Portfolio;
