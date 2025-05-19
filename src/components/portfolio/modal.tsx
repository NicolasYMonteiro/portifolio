import { MdOutlineInsertLink } from "react-icons/md";

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

interface ModalProps {
  projeto: projeto;
  onClose: () => void;
}

const Modal = ({ projeto, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold italic mb-2">{projeto.titulo}</h2>
        <p className="text-2xl text-zinc-700 mb-4">{projeto.subtitulo}</p>
        <img src={projeto.imagem} alt={projeto.alt} className="w-full h-auto rounded-xl" />
        <p className="text-xl my-4">{projeto.descricao}</p>
        <div className="text-lg text-zinc-700">
          <p><strong>Tecnologias:</strong> {projeto.tecnologias.join(", ")}.</p>
          <p><strong>Ano:</strong> {projeto.data}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {projeto.github && (
            <a
              href={projeto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline flex items-center"
            >
              <MdOutlineInsertLink className="text-2xl mr-2" />
              <span className="text-xl font-medium mb-1">Repositório GitHub</span>
            </a>
          )}
          {projeto.site && (
            <a
              href={projeto.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline flex items-center"
            >
              <MdOutlineInsertLink className="text-2xl mr-2" />
              <span className="text-xl font-medium mb-1">Ver site online</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


export default Modal;