"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 p-2 bg-zinc-800 md:bg-transparent text-zinc-200 shadow-md">
        <div className="flex items-center justify-between px-4 py-2">
          <a href="#page-top" className="text-2xl text-yellow-300 font-semibold font-roboto whitespace-nowrap">
            Nícolas Monteiro
          </a>
  
          <button
            className="flex items-center text-zinc-300 border border-zinc-700 hover:border-zinc-600 hover:border-2 px-3 py-1 rounded-md text-xl md:hidden"
            type="button"
            onClick={() => {
              const nav = document.getElementById("navbarResponsive");
              nav?.classList.toggle("hidden");
            }}
          > Menu <FontAwesomeIcon icon={faBars} className="ml-2 fa-xs" />
          </button>
  
          <div id="navbarResponsive" className="hidden w-full md:flex md:w-auto md:items-center">

            <ul className="flex flex-col mt-4 space-y-2 text-lg text-end md:mt-0 md:flex-row md:space-y-0 md:space-x-6 md:text-base md:text-left uppercase">
              <li>
                <a href="#services" className="hover:text-gray-300">
                  Serviços
                </a>
              </li>

              <li>
                <a href="#portfolio" className="hover:text-gray-300">
                  Portifólio
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-gray-300">
                  Sobre mim
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contato
                </a>
              </li>

            </ul>

          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  