import { X, Plus, Minus } from 'lucide-react';
export default function ProductModal({
  isOpen,
  onClose,
  product,
  quantity,
  setQuantity,
  onAddToCart
}) {
  if (!isOpen || !product) return null;
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end md:items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#181818] w-full max-w-2xl rounded-t-3xl md:rounded-3xl overflow-hidden animate-in slide-in-from-bottom duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Imagem */}
        <div className="relative h-80 md:h-96">
          <img
            src={product.imagem}
            alt={product.nome}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition"
          >
            <X size={24} />
          </button>
        </div>
        {/* Conteúdo */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold text-white leading-tight pr-4">
              {product.nome}
            </h2>
            <span className="text-[#F59E0B] font-bold text-4xl whitespace-nowrap">
              Kz {product.preco.toFixed(2)}
            </span>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            {product.descricao}
          </p>
          {product.ingredientes && (
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Ingredientes</h4>
              <p className="text-gray-400 leading-relaxed">
                {product.ingredientes}
              </p>
            </div>
          )}
          <div className="flex items-center justify-between bg-[#0F0F0F] rounded-2xl p-4 mb-8">
            <div>
              <p className="text-sm text-gray-400">Categoria</p>
              <p className="text-white font-medium">{product.categoria}</p>
            </div>
           
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-11 h-11 flex items-center justify-center bg-[#242424] hover:bg-[#2a2a2a] rounded-xl transition text-white"
              >
                <Minus size={20} />
              </button>
              <span className="font-semibold text-2xl w-8 text-center text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-11 h-11 flex items-center justify-center bg-[#242424] hover:bg-[#2a2a2a] rounded-xl transition text-white"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>
          <button
            onClick={onAddToCart}
            className="w-full bg-[#F59E0B] hover:bg-amber-400 transition text-black font-bold py-5 text-xl rounded-2xl flex items-center justify-center gap-3 active:scale-[0.985]"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}