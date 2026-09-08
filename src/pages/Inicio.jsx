import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Flame,
  Utensils,
  Heart,
  ShoppingBag,
  ChefHat,
} from "lucide-react";

import Layout from "../components/Layout";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Feature({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900/50
        p-4
        backdrop-blur-sm
        transition-colors
        duration-300
        hover:border-amber-500/40
      "
    >
      <div
        className="
          mb-3
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          bg-amber-500/10
          text-amber-500
        "
      >
        {icon}
      </div>

      <h3 className="text-sm font-bold text-white">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-zinc-500">
        {description}
      </p>
    </motion.div>
  );
}

export default function Inicio() {
  return (
    <Layout>
      <main className="relative min-h-screen overflow-hidden bg-[#090909] text-white">
        
        {/* =========================
            EFEITOS DE FUNDO
        ========================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          
          {/* Luz central */}
          <div
            className="
              absolute
              top-20
              left-1/2
              h-72
              w-72
              -translate-x-1/2
              rounded-full
              bg-amber-500/10
              blur-[120px]
              sm:h-96
              sm:w-96
            "
          />

          {/* Luz direita */}
          <div
            className="
              absolute
              -right-32
              bottom-0
              h-80
              w-80
              rounded-full
              bg-orange-600/10
              blur-[120px]
            "
          />

          {/* Luz esquerda */}
          <div
            className="
              absolute
              -left-32
              top-1/2
              h-64
              w-64
              rounded-full
              bg-red-600/5
              blur-[100px]
            "
          />

          {/* Linhas decorativas */}
          <div
            className="
              absolute
              top-0
              left-1/2
              h-full
              w-px
              bg-gradient-to-b
              from-transparent
              via-amber-500/10
              to-transparent
            "
          />
        </div>

        {/* =========================
            HERO
        ========================== */}

        <section
          className="
            relative
            mx-auto
            flex
            min-h-[calc(100vh-80px)]
            max-w-7xl
            items-center
            px-5
            py-16
            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              grid
              w-full
              items-center
              gap-12
              lg:grid-cols-2
              lg:gap-16
            "
          >

            {/* =========================
                CONTEÚDO ESQUERDO
            ========================== */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >

              {/* BADGE */}

              <motion.div
                variants={itemVariants}
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-amber-500/20
                  bg-amber-500/5
                  px-4
                  py-2
                "
              >
                <Flame
                  size={17}
                  className="text-amber-500"
                />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-amber-400
                  "
                >
                  Sabor que conquista
                </span>
              </motion.div>

              {/* TÍTULO */}

              <motion.h1
                variants={itemVariants}
                className="
                  text-5xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Mais recheio.
                <br />

                Mais sabor.
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-amber-400
                    via-orange-400
                    to-orange-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Uma mordida
                  <br />
                  que vicia!
                </span>
              </motion.h1>

              {/* DESCRIÇÃO */}

              <motion.p
                variants={itemVariants}
                className="
                  mt-7
                  max-w-xl
                  text-base
                  leading-7
                  text-zinc-400
                  sm:text-lg
                "
              >
                Sandes, hambúrgueres e acompanhamentos preparados com
                ingredientes selecionados para transformar cada mordida
                numa experiência inesquecível.
              </motion.p>

              {/* =========================
                  BOTÕES
              ========================== */}

              <motion.div
                variants={itemVariants}
                className="
                  mt-9
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                "
              >

                {/* BOTÃO PRINCIPAL */}

                <Link to="/cardapio">
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      group
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-gradient-to-r
                      from-amber-500
                      to-orange-500
                      px-7
                      py-4
                      font-bold
                      text-black
                      shadow-lg
                      shadow-amber-500/10
                      sm:w-auto
                    "
                  >
                    <Utensils size={20} />

                    Ver cardápio

                    <ArrowRight
                      size={19}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </motion.div>
                </Link>

                {/* BOTÃO SECUNDÁRIO */}

                <Link to="/cardapio">
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      border
                      border-zinc-700
                      bg-zinc-900/60
                      px-7
                      py-4
                      font-semibold
                      text-zinc-200
                      backdrop-blur-sm
                      transition
                      hover:border-amber-500/50
                      hover:text-amber-400
                      sm:w-auto
                    "
                  >
                    <ShoppingBag size={20} />

                    Fazer pedido
                  </motion.div>
                </Link>

              </motion.div>

              {/* =========================
                  CARACTERÍSTICAS
              ========================== */}

              <motion.div
                variants={itemVariants}
                className="
                  mt-12
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-3
                "
              >
                <Feature
                  icon={<ChefHat size={21} />}
                  title="Ingredientes frescos"
                  description="Selecionados para garantir mais qualidade."
                />

                <Feature
                  icon={<Flame size={21} />}
                  title="Preparado na hora"
                  description="Mais sabor e uma experiência especial."
                />

                <Feature
                  icon={<Heart size={21} />}
                  title="Feito com paixão"
                  description="Cada pedido preparado com dedicação."
                />
              </motion.div>

            </motion.div>

            {/* =========================
                IMAGEM DIREITA
            ========================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                relative
                flex
                min-h-[400px]
                items-center
                justify-center
                lg:min-h-[600px]
              "
            >

              {/* Glow atrás do hambúrguer */}

              <div
                className="
                  absolute
                  h-64
                  w-64
                  rounded-full
                  bg-orange-500/20
                  blur-[100px]
                  sm:h-96
                  sm:w-96
                "
              />

              {/* Imagem com animação flutuante */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >

                <img
                  src="/humburgT.webp"
                  alt="Hambúrguer especial recheado"
                  className="
                    relative
                    z-10
                    w-full
                    max-w-sm
                    object-contain
                    drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)]
                    sm:max-w-lg
                    lg:max-w-xl
                  "
                />

                {/* Badge flutuante */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                  }}
                  className="
                    absolute
                    top-5
                    right-0
                    z-20
                    rounded-2xl
                    border
                    border-amber-500/20
                    bg-[#0c0c0c]/90
                    px-5
                    py-4
                    shadow-xl
                    backdrop-blur-md
                  "
                >
                  <div className="flex items-center gap-2">
                    <Flame
                      size={18}
                      className="text-amber-500"
                    />

                    <span className="text-xs font-medium text-zinc-400">
                      Especial da casa
                    </span>
                  </div>

                  <p className="mt-1 text-lg font-black text-white">
                    100% RECHEADO
                  </p>
                </motion.div>

              </motion.div>

            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}