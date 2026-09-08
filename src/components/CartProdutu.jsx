import { useCartStore } from './cartStore';

function ProdutoCard({ produto, onClick }) {
  const adicionar = useCartStore((state) => state.adicionar);

  const handleAdicionar = (e) => {
    e.stopPropagation(); // impede que o clique no botão também abra o detalhe
adicionar(produto); // envia o objeto inteiro    
  };

  return (
    <div className="produto-card" onClick={() => onClick(produto.id)}>
      <div className="produto-card__img-wrap">
        <img
          src={produto.img}
          alt={produto.nome}
          className="produto-card__img"
        />
      </div>

      <div className="produto-card__info">
        <h3 className="produto-card__nome">{produto.nome}</h3>
        <span className="produto-card__preco">{produto.preco} Kz</span>
      </div>

      <button
        className="produto-card__btn-add"
        onClick={handleAdicionar}
        aria-label={`Adicionar ${produto.nome} ao carrinho`}
      >
        +
      </button>
    </div>
  );
}

export default ProdutoCard;
