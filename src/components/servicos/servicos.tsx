"use client";
import Image from "next/image";

const Servicos = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-zinc-800">Serviços</h2>
          <h3 className="text-lg text-zinc-500 mt-2">
            Unindo expertise em desenvolvimento front-end e back-end para oferecer
            soluções completas e seguras.
          </h3>
        </div>

        {/* Cards de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-center">
          {/* Front-End */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-4 mb-4">
              <Image src="/servicos/angular.png" alt="Angular" width={20} height={20} className="w-20 h-20" />
              <Image src="/servicos/react.png" alt="React" width={20} height={20} className="w-20 h-20" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Desenvolvimento Front-End</h4>
            <p className="text-zinc-600">
              Especializado em criar interfaces interativas e dinâmicas utilizando Angular e Next.js.
              Ofereço soluções responsivas e otimizadas para garantir a melhor experiência do usuário,
              alinhando design moderno com performance.
            </p>
          </div>

          {/* Back-End */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-4 mb-4">
              <Image src="/servicos/spring.png" alt="Spring Boot" width={20} height={20} className="w-20 h-20" />
              <Image src="/servicos/nodejs.png" alt="Node.js" width={20} height={20} className="w-24 h-24" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Desenvolvimento Back-End</h4>
            <p className="text-zinc-600">
              Implemento APIs robustas e seguras utilizando Spring Boot ou NodeJs, garantindo que seus
              sistemas tenham uma arquitetura escalável, eficiente e segura.
              Faço integração de banco de dados, autenticação e lógica de negócios com foco em performance.
            </p>
          </div>

          {/* Dados */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <Image src="/servicos/dados.png" width={20} height={20} alt="Dados" className="w-24 h-24" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Análise de Dados</h4>
            <p className="text-zinc-600">
              Coleta, organização e visualização de dados para apoiar decisões estratégicas.
              Utilizo Python (Pandas, Matplotlib), Excel e Power BI para entregar insights claros e úteis.
            </p>
          </div>

          {/* Suporte Técnico */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <Image src="/servicos/ti.png" width={20} height={20} alt="TI" className="w-24 h-24" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Suporte Técnico e Manutenção</h4>
            <p className="text-zinc-600">
              Atendimento técnico com foco em diagnóstico e resolução de problemas em computadores,
              redes, periféricos e infraestrutura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
