import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-zinc-600 py-6">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                {/* Left: Copyright */}
                <div className="text-center lg:text-left mb-4 lg:mb-0">
                   Feito por Nícolas Monteiro
                </div>

                {/* Center: Social Icons */}
                <div className="flex justify-center items-center space-x-4 mb-4 gap-2 lg:mb-0">
                    <a href="https://github.com/nicolasYmonteiro" target="_blank" aria-label="GitHub" className=" transition hover:text-yellow-600">
                        <i className="fab fa-github text-4xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/n%C3%ADcolas-monteiro-5237b2282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" target="_blank" className="hover:text-yellow-600 transition">
                        <i className="fab fa-linkedin-in text-4xl"></i>
                    </a>
                </div>

                {/* Right: Links */}
                <div className="text-center lg:text-right space-x-4">
                    <p className='text-gray-500'> &copy; Copyright {currentYear} <span className='font-bold'>–</span> Todos os direitos reservados</p>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
