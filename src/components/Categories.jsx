// Categories.jsxexp
// Categories.jsx
export default function Categories({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="mb-8">
      <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-2xl font-medium whitespace-nowrap snap-start transition-all flex-shrink-0
              ${selectedCategory === category
                ? 'bg-[#F59E0B] text-black'
                : 'bg-[#181818] text-white hover:bg-[#242424]'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}