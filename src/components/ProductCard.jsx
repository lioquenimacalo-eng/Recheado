// ProductCard.jsxex
// ProductCard.jsx
export default function ProductCard({ product, onClick }) {
  const hasBadge = product.maisVendido || product.novo || product.promocao;
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-[#181818] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg group"
    >
      <div className="relative aspect-square">
        <img
          src={product.imagem}
          alt={product.nome}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
       
        {hasBadge && (
          <div className="absolute top-3 left-3">
            {product.maisVendido && (
              <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-xl">MAIS VENDIDO</span>
            )}
            {product.novo && (
              <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-xl">NOVO</span>
            )}
            {product.promocao && (
              <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-xl">PROMOÇÃO</span>
            )}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white line-clamp-2 min-h10 text-lg leading-tight">
          {product.nome}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[#F59E0B] font-bold text-2xl">
            Kz {product.preco.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}