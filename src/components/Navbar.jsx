import { useState } from 'react';
import Menu from './Menu';
import { Menu as MenuIcon, X, ShoppingCart, Search } from "lucide-react";
import { useCartStore } from './cartStore'; // ajuste o caminho se necessário
import CarrinhoDrawer from './CarrinhoDrawer';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Forma correta e segura de calcular o total de itens
  const totalItens = useCartStore((state) =>
    state.items.reduce((total, item) => total + (item.quantity || 0), 0)
  );

  return (
    <>
      <nav className="bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo + Hambúrguer */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2 -ml-2"
                aria-label="Abrir menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>

              <div className="flex items-center gap-3">
                <img
                  src="/logo2.webp"
                  alt="Logo"
                  className="h-9 md:h-11 w-auto"
                />
                <span className="text-2xl tracking-tighter text-white hidden sm:block">
                  Recheado
                </span>
              </div>
            </div>

            {/* Search - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              {/* seu search aqui */}
            </div>

            {/* Carrinho */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 px-4 py-2.5 rounded-2xl transition-all"
              >
                <ShoppingCart size={22} className="text-white" />
                
                {/* Badge com a quantidade */}
                {totalItens > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItens}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Mobile */}
        <div className="md:hidden px-4 pb-4">
          {/* seu search mobile aqui */}
        </div>

        {/* Menu Mobile */}
        <Menu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </nav>

      {/* Drawer do Carrinho */}
      <CarrinhoDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}

export default Navbar;