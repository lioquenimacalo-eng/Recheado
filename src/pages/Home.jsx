// pages/Home.jsx  (ou pages/index.jsx)
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ou next/link se for Next.js
import {
  Zap,
  Star,
  Clock,
  Heart,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import produtos from "../data/Produtos";

// Imagens de hamburger aleatórias (pode trocar pelas suas)
const hamburgers = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=800&fit=crop",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Home() {
  const [bgImage, setBgImage] = useState(hamburgers[0]);

  useEffect(() => {
    // Escolhe um hamburger aleatório no carregamento
    const random = hamburgers[Math.floor(Math.random() * hamburgers.length)];
    setBgImage(random);
  }, []);

  const handleProductClick = (product) => {
    console.log("Produto clicado:", product);
    // Aqui você pode abrir um modal ou navegar para detalhes
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* ================= HERO - Estética App Mobile ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Fundo do hamburger com overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/70 to-zinc-950" />

        {/* Conteúdo central (estilo app) */}
        <div className="relative z-10 w-full max-w-md mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            {/* Badge estilo app */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-sm font-medium">
                <Zap className="w-4 h-4" />
                Fast Food • Recheados
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              <span className="text-white">Recheado,</span>
              <br />
              <span className="text-amber-400">uma mordida</span>
              <br />
              <span className="text-white">que vicia</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-zinc-300 text-lg leading-relaxed"
            >
              Snacks generosos, sabor intenso e entrega rápida.
              Feito para quem não abre mão de qualidade.
            </motion.p>

            {/* Botões estilo app */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Link
                to="/cardapio"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-amber-400 text-zinc-950 font-bold rounded-2xl hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
              >
                Ver Cardápio
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/sobre"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-zinc-900/80 border border-zinc-700 text-white font-semibold rounded-2xl hover:bg-zinc-800 transition-colors backdrop-blur-sm"
              >
                Sobre Nós
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Indicador de scroll (estilo app) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-zinc-500 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              className="w-1.5 h-1.5 rounded-full bg-amber-400"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURES (aparecem no scroll) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-3">
              Por que a <span className="text-amber-400">Recehados</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-zinc-400 max-w-xl mx-auto">
              Experiência pensada para quem quer sabor de verdade, sem complicação.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Rápido",
                desc: "Preparo ágil sem perder qualidade",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Sabor",
                desc: "Recheios generosos e ingredientes selecionados",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Sempre fresco",
                desc: "Feito na hora, todos os dias",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Feito com carinho",
                desc: "Atendimento e qualidade em primeiro lugar",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-400/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUTOS EM DESTAQUE ================= */}
      <section className="py-16 px-6 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold">
                Os mais <span className="text-amber-400">pedidos</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-zinc-400 mt-1">
                Escolha o seu favorito e sinta a diferença
              </motion.p>
            </div>

            <motion.div variants={fadeInUp}>
              <Link
                to="/cardapio"
                className="inline-flex items-center gap-2 text-amber-400 font-medium hover:text-amber-300 transition-colors"
              >
                Ver todos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Grid de produtos usando o ProductCard */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {produtos.slice(0, 6).map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <ProductCard product={product} onClick={handleProductClick} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-400/10 text-amber-400 mb-6"
          >
            <ShoppingBag className="w-8 h-8" />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
            Pronto para a sua{" "}
            <span className="text-amber-400">próxima mordida</span>?
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-zinc-400 mb-8">
            Monte o seu pedido agora e experimente o recheado que está conquistando todo mundo.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link
              to="/cardapio"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-400 text-zinc-950 font-bold rounded-2xl hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
            >
              Ir para o Cardápio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}