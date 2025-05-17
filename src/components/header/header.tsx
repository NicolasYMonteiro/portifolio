import TopBar from "../topBar/topBar";

const Header = () => {
    return (
        <div className="relative w-full">
            <TopBar />
            <img
                src="header.webp"
                alt=""
                className="w-full h-92 md:h-128 object-cover brightness-20"
            />

            <div className="flex absolute inset-0 z-10 flex-col items-center justify-center text-center px-4 mt-16 text-white">
                <h1 className="text-2xl md:text-4xl font-bold font-serif mb-2 italic">Olá, sou Nícolas Monteiro</h1>
                <p className="text-xl md:text-2xl font-semibold max-w-2xl mt-2 md:mt-6">
                    Desenvolvedor Full Stack com foco em Angular, Next.js, Spring Boot e NodeJs. Estudante de Estatística pela UFBA, apaixonado por tecnologia e dados.
                </p>
            </div>
        </div>
    );
}

export default Header;