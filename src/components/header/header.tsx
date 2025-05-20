import TopBar from "../topBar/topBar";
import Image from "next/image";

const Header = () => {
    return (
        <div className="relative w-full">
            <TopBar />
            <Image
                src="/header.webp"
                alt=""
                width={1920} 
                height={92}
                className="w-full h-92 md:h-128 object-cover brightness-20"
            />

            <div className="flex absolute inset-0 z-10 flex-col items-center justify-center text-center px-4 mt-16 text-white">
                <h1 className="text-2xl md:text-4xl font-bold font-serif mb-2 italic">Olá, sou Nícolas Monteiro.</h1>
                <p className="text-lg md:text-2xl font-semibold max-w-2xl mt-2 md:mt-6">
                    Desenvolvedor Full Stack com foco em Angular, Next.js, Spring Boot e NodeJs. Estudante de Estatística pela UFBA, apaixonado por tecnologia e dados.
                </p>

            </div>
            {/* Center: Social Icons */}
            <div className="flex absolute inset-0 z-10 space-x-4 mb-4 gap-2 justify-end items-end px-4">
                <a href="https://github.com/nicolasYmonteiro" target="_blank" aria-label="GitHub" className=" text-white transition hover:text-yellow-600">
                    <i className="fab fa-github text-3xl"></i>
                </a>
                <a href="https://www.youtube.com/@DevNoBrasil" target="_blank" aria-label="Youttube" className="text-white hover:text-yellow-600 transition">
                    <i className="fab fa-youtube text-3xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/n%C3%ADcolas-monteiro-5237b2282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" target="_blank" className="text-white hover:text-yellow-600 transition">
                    <i className="fab fa-linkedin-in text-3xl"></i>
                </a>
            </div>


        </div>
    );
}

export default Header;