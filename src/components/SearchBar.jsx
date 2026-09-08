// SearchBar.jsximpo
// SearchBar.jsx
import { Search } from 'lucide-react';
export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative mb-8">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
        <Search size={20} />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar no cardápio..."
        className="w-full bg-[#181818] text-white pl-12 pr-5 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B] placeholder-gray-500 text-base"
      />
    </div>
  );
}