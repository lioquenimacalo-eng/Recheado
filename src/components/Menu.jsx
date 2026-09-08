
import { Link } from "react-router-dom";
import { Home, Utensils, Info, Phone, X } from "lucide-react";
export default function Menu({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const menus = [
    { nome: "Início", caminho: "/", icon: <Home size={24} /> },
    { nome: "Cardápio", caminho: "/cardapio", icon: <Utensils size={24} /> },
    { nome: "Sobre Nós", caminho: "/sobreNos", icon: <Info size={24} /> },
    { nome: "Contacto", caminho: "/contacto", icon: <Phone size={24} /> },
  ];
  return (
    <>
      {/* ==================== MENU DESKTOP ==================== */}
      <div className="hidden md:flex items-center justify-center gap-8 text-sm font-medium px-4">
        {menus.map((item, index) => (
          <Link
            key={index}
            to={item.caminho}
            className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors py-2"
          >
            <span className="text-orange-500">{item.icon}</span>
            {item.nome}
          </Link>
        ))}
      </div>
      {/* ==================== MENU MOBILE ==================== */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-zinc-950 z-60 pt-20 px-6 h-screen">
          <div className="flex flex-col gap-2 py-6">
            <button
                          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                          className="md:hidden text-white p-2 -ml-2"
                          aria-label="Abrir menu"
                        >
                           <X size={28} />  
                        </button>
            {menus.map((item, index) => (
              <Link
                key={index}
                to={item.caminho}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 py-5 px-4 text-lg text-zinc-200 hover:text-white hover:bg-zinc-900 rounded-xl transition-all"
              >
                <span className="text-orange-500">{item.icon}</span>
                {item.nome}
              </Link>
            ))}
          </div>
        
        </div>
      )}
    </>
  );
}