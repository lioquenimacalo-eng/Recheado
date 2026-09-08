import { create } from 'zustand';

export const useCartStore = create((set) => ({
  items: [],

  adicionar: (produto, quantidade = 1) =>
    set((state) => {
      const itemExistente = state.items.find((item) => item.id === produto.id);

      if (itemExistente) {
        return {
          items: state.items.map((item) =>
            item.id === produto.id
              ? { ...item, quantity: item.quantity + quantidade }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...produto, quantity: quantidade }],
      };
    }),

  remover: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  atualizarQuantidade: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    })),

  limparCarrinho: () => set({ items: [] }),
}));