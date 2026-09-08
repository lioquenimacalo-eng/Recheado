import {
  Phone,
  Mail,
  MapPin,
  Flame,
} from "lucide-react";

// Rodapé da página
function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 flex flex-wrap gap-8 px-10 py-10">
      
      {/* Marca */}
      <div className="flex-1 min-w-[200px]">
        <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
          <Flame size={20} className="text-amber-500" />
          Recheados
        </div>

        <p className="text-sm">
          Mais recheio. Mais sabor. Uma mordida que vicia.
        </p>
      </div>

      {/* Navegação */}
      <div className="flex-1 min-w-[200px]">
        <h4 className="text-white font-semibold mb-3">
          NAVEGAÇÃO
        </h4>

        <p className="text-sm my-1.5">Início</p>
        <p className="text-sm my-1.5">Cardápio</p>
        <p className="text-sm my-1.5">Sobre</p>
        <p className="text-sm my-1.5">Serviços</p>
        <p className="text-sm my-1.5">Contacto</p>
      </div>

      {/* Contactos */}
      <div className="flex-1 min-w-[200px]">
        <h4 className="text-white font-semibold mb-3">
          CONTACTOS
        </h4>

        <p className="flex items-center gap-2 text-sm my-1.5">
          <Phone size={16} className="text-amber-500" />
          +244 931 555 634
        </p>

        <p className="flex items-center gap-2 text-sm my-1.5">
          <Mail size={16} className="text-amber-500" />
          geral@grupoyoung.ao
        </p>

        <p className="flex items-center gap-2 text-sm my-1.5">
          <MapPin size={16} className="text-amber-500" />
          Luanda, Angola
        </p>
      </div>

      {/* Copyright */}
      <p className="w-full text-center text-xs mt-6 border-t border-gray-700 pt-5">
        © 2026 Recheados. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;