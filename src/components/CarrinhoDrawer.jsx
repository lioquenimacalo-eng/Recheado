import { useState, useEffect, useRef } from "react";
import {
  X,
  Plus,
  Minus,
  Trash2,
  MapPin,
  ShoppingCart,
  Loader2,
} from "lucide-react";
import { useCartStore } from "./cartStore";

function CarrinhoDrawer({ isOpen, onClose }) {
  const [localizando, setLocalizando] = useState(false);
  const items = useCartStore((state) => state.items);
  const adicionar = useCartStore((state) => state.adicionar);
  const remover = useCartStore((state) => state.remover);
  const atualizarQuantidade = useCartStore(
    (state) => state.atualizarQuantidade
  );
  const limparCarrinho = useCartStore((state) => state.limparCarrinho);

  // Evita que o pedido seja enviado duas vezes (duplo toque, timeout + resposta, etc.)
  const enviandoRef = useRef(false);

  // ==========================================
  // RESET AO VOLTAR DO WHATSAPP (Safari / iOS)
  // O Safari guarda a página em cache (bfcache). Ao voltar do WhatsApp,
  // o estado "localizando" poderia continuar preso. Aqui repomos tudo.
  // ==========================================
  useEffect(() => {
    function aoMostrarPagina() {
      enviandoRef.current = false;
      setLocalizando(false);
    }

    function aoMudarVisibilidade() {
      if (document.visibilityState === "visible") aoMostrarPagina();
    }

    window.addEventListener("pageshow", aoMostrarPagina);
    document.addEventListener("visibilitychange", aoMudarVisibilidade);

    return () => {
      window.removeEventListener("pageshow", aoMostrarPagina);
      document.removeEventListener("visibilitychange", aoMudarVisibilidade);
    };
  }, []);

  // ==========================================
  // TOTAL DE ITENS
  // ==========================================
  const totalItens = items.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  // ==========================================
  // PREÇO TOTAL
  // ==========================================
  const totalPreco = items.reduce(
    (total, item) => total + item.preco * (item.quantity || 0),
    0
  );

  // ==========================================
  // FORMATAR PREÇO
  // ==========================================
  function formatarPreco(valor) {
    return `${valor.toLocaleString("pt-AO")} Kz`;
  }

  // ==========================================
  // FINALIZAR PEDIDO
  // Funciona no Safari/iOS e NÃO depende da localização:
  // - não abre abas em branco (window.open)
  // - a localização tem tempo limite curto
  // - qualquer falha continua o pedido sem localização
  // ==========================================
  function finalizarPedido() {
    if (items.length === 0) return;
    if (enviandoRef.current) return;
    enviandoRef.current = true;

    const numeroWhatsApp = "244957992534";

    // Monta a lista de produtos (sempre igual)
    const listaProdutos = items
      .map((item) => {
        const quantidade = item.quantity || 0;
        const subtotal = item.preco * quantidade;
        return `• ${item.nome} x${quantidade} — ${formatarPreco(subtotal)}`;
      })
      .join("\n");

    // Monta a mensagem e abre o WhatsApp
    function enviarParaWhatsApp(linkLocalizacao, latitude, longitude) {
      const blocoLocalizacao = linkLocalizacao
        ? `Localização:\n${linkLocalizacao}\n\nLatitude: ${latitude}\nLongitude: ${longitude}`
        : `⚠️ Localização não disponível. Por favor, envie a sua morada por aqui.`;

      const mensagem = `
Olá! Vim do app da Rechiados.

PEDIDO

${listaProdutos}

Total: ${formatarPreco(totalPreco)}

${blocoLocalizacao}
      `.trim();

      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
        mensagem
      )}`;

      setLocalizando(false);

      // Método mais confiável em Safari / iOS / PWA:
      // navega a página atual. O link universal do WhatsApp
      // é entregue ao app nativo (ou abre o WhatsApp Web no desktop).
      window.location.href = urlWhatsApp;

      // Liberta o botão caso o utilizador volte sem o Safari recarregar a página
      setTimeout(() => {
        enviandoRef.current = false;
      }, 1500);
    }

    // Sem suporte a geolocalização → envia logo
    if (!navigator.geolocation) {
      enviarParaWhatsApp(null, null, null);
      return;
    }

    setLocalizando(true);

    // Tempo limite curto para não prender o utilizador
    const TIMEOUT_MS = 5000;
    let resolvido = false;

    // Garante que só envia UMA vez, venha de onde vier
    function concluir(position) {
      if (resolvido) return;
      resolvido = true;

      if (position && position.coords) {
        const { latitude, longitude } = position.coords;
        const linkLocalizacao = `https://www.google.com/maps?q=${latitude},${longitude}`;
        enviarParaWhatsApp(linkLocalizacao, latitude, longitude);
      } else {
        enviarParaWhatsApp(null, null, null);
      }
    }

    // Plano B: se o navegador não responder (comum no iOS quando o aviso
    // de permissão fica aberto), segue sem localização.
    const timer = setTimeout(() => concluir(null), TIMEOUT_MS + 500);

    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          clearTimeout(timer);
          concluir(position);
        },
        () => {
          // negada, indisponível, timeout ou qualquer outro erro
          clearTimeout(timer);
          concluir(null);
        },
        {
          enableHighAccuracy: false, // mais rápido e estável no iPhone
          timeout: TIMEOUT_MS,
          maximumAge: 60000, // aceita uma posição recente em cache
        }
      );
    } catch (erro) {
      clearTimeout(timer);
      concluir(null);
    }
  }

  return (
    <>
      {/* ========================================
          OVERLAY
      ======================================== */}
      <div
        className={`
          fixed inset-0
          bg-black/60
          z-50
          transition-opacity
          duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={onClose}
      />

      {/* ========================================
          DRAWER
      ======================================== */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-full
          w-full
          max-w-md
          bg-zinc-950
          border-l
          border-white/10
          z-50
          transform
          transition-transform
          duration-300
          ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* ======================================
            HEADER
        ====================================== */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShoppingCart size={22} className="text-white" />
            <h2 className="text-xl font-semibold text-white">
              Carrinho ({totalItens})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar carrinho"
            className="text-white p-2 rounded-full hover:bg-white/10 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* ======================================
            LISTA DE PRODUTOS
        ====================================== */}
        <div className="overflow-y-auto h-[calc(100%-180px)] p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-20 text-center">
              <ShoppingCart size={42} className="text-zinc-600 mb-4" />
              <p className="text-zinc-400">O seu carrinho está vazio.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const quantidade = item.quantity || 0;
                const subtotal = item.preco * quantidade;

                return (
                  <div key={item.id} className="flex gap-4">
                    {/* IMAGEM */}
                    <img
                      src={item.imagem || "/placeholder.png"}
                      alt={item.nome}
                      className="w-20 h-20 object-cover rounded-xl shrink-0"
                    />

                    {/* INFORMAÇÕES */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium truncate">
                        {item.nome}
                      </h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        {formatarPreco(item.preco)}
                      </p>

                      {/* CONTROLES */}
                      <div className="flex items-center gap-3 mt-3">
                        {/* DIMINUIR */}
                        <button
                          type="button"
                          onClick={() => {
                            if (quantidade > 1) {
                              atualizarQuantidade(item.id, quantidade - 1);
                            } else {
                              remover(item.id);
                            }
                          }}
                          aria-label={`Diminuir quantidade de ${item.nome}`}
                          className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition"
                        >
                          <Minus size={16} />
                        </button>

                        {/* QUANTIDADE */}
                        <span className="text-white font-medium w-6 text-center">
                          {quantidade}
                        </span>

                        {/* AUMENTAR */}
                        <button
                          type="button"
                          onClick={() => adicionar(item, 1)}
                          aria-label={`Aumentar quantidade de ${item.nome}`}
                          className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition"
                        >
                          <Plus size={16} />
                        </button>

                        {/* REMOVER */}
                        <button
                          type="button"
                          onClick={() => remover(item.id)}
                          aria-label={`Remover ${item.nome}`}
                          className="ml-auto text-red-400 hover:text-red-300 p-2 rounded-full hover:bg-red-400/10 transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      {/* SUBTOTAL */}
                      <p className="text-white text-sm font-medium mt-2">
                        Subtotal: {formatarPreco(subtotal)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ======================================
            FOOTER
        ====================================== */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/10 bg-zinc-950">
            {/* TOTAL */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400">Total</span>
              <span className="text-xl font-bold text-white">
                {formatarPreco(totalPreco)}
              </span>
            </div>

            {/* FINALIZAR PEDIDO */}
            <button
              type="button"
              onClick={finalizarPedido}
              disabled={localizando}
              className="w-full bg-white text-black font-semibold py-3.5 rounded-2xl hover:bg-zinc-200 transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {localizando ? (
                <>
                  <Loader2 size={19} className="animate-spin" />
                  Obtendo localização...
                </>
              ) : (
                <>
                  <MapPin size={19} />
                  Finalizar Pedido
                </>
              )}
            </button>

            {/* LIMPAR CARRINHO */}
            <button
              type="button"
              onClick={limparCarrinho}
              disabled={localizando}
              className="w-full mt-3 text-red-400 text-sm hover:text-red-300 transition disabled:opacity-50"
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
