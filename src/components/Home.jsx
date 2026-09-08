// Home.jsx
import { useState, useMemo } from 'react';
import produtos from '../data/produtos';
import SearchBar from './SearchBar';
import Categories from './Categories';
import ProductGrid from './ProductGrid';
import ProductModal from './ProductModal';
import { useCartStore } from './cartStore'; // ajuste o caminho se necessário

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Função do carrinho
  const adicionar = useCartStore((state) => state.adicionar);

  const categories = useMemo(() => {
    const cats = ['Todos', ...new Set(produtos.map(p => p.categoria))];
    return cats;
  }, []);

  const filteredProducts = useMemo(() => {
    return produtos.filter(produto => {
      const matchesSearch = produto.nome.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || produto.categoria === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const openModal = (produto) => {
    setSelectedProduct(produto);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      adicionar(selectedProduct, quantity); // adiciona o produto com a quantidade escolhida
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] pb-12">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductGrid
          products={filteredProducts}
          onProductClick={openModal}
        />

        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
          quantity={quantity}
          setQuantity={setQuantity}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}