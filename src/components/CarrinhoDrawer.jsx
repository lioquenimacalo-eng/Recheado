import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCartStore } from './cartStore'; // ajuste o caminho se necessário

function CarrinhoDrawer({ isOpen, onClose }) {
  const items = useCartStore((state) => state.items);
  const adicionar = useCartStore((state) => state.adicionar);
  const remover = useCartStore((state) => state.remover);
  const atualizarQuantidade = useCartStore((state) => state.atualizarQuantidade);
  const limparCarrinho = useCartStore((state) => state.limparCarrinho);

  // Calcula o total de itens
  const totalItens = items.reduce((total, item) => total + (item.quantity || 0), 0);

  // Calcula o preço total
  const totalPreco = items.reduce(
    (total, item) => total + (item.preco * (item.quantity || 0)),
    0
  );

  return (
    <>
      {/* Fundo escuro */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">
            Carrinho ({totalItens})
          </h2>
          <button onClick={onClose} className="text-white p-1">
            <X size={24} />
          </button>
        </div>

        {/* Lista de itens */}
        <div className="overflow-y-auto h-[calc(100%-180px)] p-5">
          {items.length === 0 ? (
            <p className="text-zinc-400 text-center mt-10">
              O seu carrinho está vazio.
            </p>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.imagem || "/placeholder.png"}
                    alt={item.nome}
                    className="w-20 h-20 object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.nome}</h3>
                    <p className="text-zinc-400 text-sm mt-1">
                      {item.preco} Kz
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      {/* Diminuir quantidade */}
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            atualizarQuantidade(item.id, item.quantity - 1);
                          } else {
                            remover(item.id);
                          }
                        }}
                        className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="text-white font-medium w-6 text-center">
                        {item.quantity}
                      </span>

                      {/* Aumentar quantidade */}
                      <button
                        onClick={() => adicionar(item, 1)}
                        className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white"
                      >
                        <Plus size={16} />
                      </button>

                      {/* Remover item */}
                      <button
                        onClick={() => remover(item.id)}
                        className="ml-auto text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/10 bg-zinc-950">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400">Total</span>
              <span className="text-xl font-bold text-white">
                {totalPreco.toLocaleString('pt-AO')} Kz
              </span>
            </div>

            <button className="w-full bg-white text-black font-semibold py-3.5 rounded-2xl hover:bg-zinc-200 transition">
              Finalizar Pedido
            </button>

            <button
              onClick={limparCarrinho}
              className="w-full mt-3 text-red-400 text-sm hover:text-red-300"
            >
              Limpar carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CarrinhoDrawer;