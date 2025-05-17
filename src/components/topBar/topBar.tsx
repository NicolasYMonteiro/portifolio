"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  // Detecta se está no topo da página
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <ul className="flex flex-col mt-4 space-y-2 text-lg md:mt-0 md:flex-row md:space-y-0 md:space-x-6 uppercase">
      <li>
        <a href="#services" className="hover:text-gray-400">
          Serviços
        </a>
      </li>
      <li>
        <a href="#portfolio" className="hover:text-gray-400">
          Portifólio
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-gray-400">
          Sobre mim
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-gray-400">
          Contato
        </a>
      </li>
    </ul>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 p-2 md:p-4 text-zinc-200 transition-colors duration-300 shadow-md ${
        isTop ? "bg-transparent" : "bg-zinc-800"
      }`}
    >
      <div className="flex items-center justify-between px-2 py-2">
        <a
          href="#page-top"
          className="text-2xl md:text-3xl text-yellow-400 font-semibold whitespace-nowrap"
        >
          Nícolas Monteiro
        </a>

        <button
          className="flex items-center text-zinc-400 border border-zinc-700 hover:border-zinc-600 hover:border-2 px-3 py-1 rounded-md text-xl md:hidden"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu <FontAwesomeIcon icon={faBars} className="ml-2 fa-xs" />
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex md:items-center">{navLinks}</div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">{navLinks}</div>
      )}
    </header>
  );
};

export default TopBar;
