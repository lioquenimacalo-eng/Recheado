
import Layout from '../components/Layout';

          import { Link } from "react-router-dom";





import React from "react";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Zap,
  Heart,
  Target,
  Eye,
  Gem,
  ArrowRight,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const SobreNos = () => {
  return (
       <Layout>
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 to-transparent" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20"
          >
            Desde o primeiro lanche
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Sobre a <span className="text-amber-400">Recehados</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            Somos um estabelecimento de fast-food apaixonado por snacks autênticos,
            sabor intenso e atendimento de qualidade. Cada recheado é feito com
            dedicação para transformar o seu lanche em um momento especial.
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6">
              A nossa <span className="text-amber-400">história</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-zinc-400 leading-relaxed mb-4"
            >
              A Recehados nasceu da vontade de oferecer snacks de qualidade, com
              recheios generosos e um toque caseiro que faz a diferença. O que
              começou como uma ideia simples de servir lanches saborosos
              rapidamente se tornou um ponto de referência para quem busca
              praticidade sem abrir mão do sabor.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-zinc-400 leading-relaxed"
            >
              Hoje, continuamos fiéis à nossa essência: ingredientes selecionados,
              preparo cuidadoso e um ambiente acolhedor onde cada cliente se sente
              em casa. Acreditamos que um bom snack tem o poder de alegrar o dia.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
          >
            <div className="space-y-6">
              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Diversos Snacks</h3>
                  <p className="text-zinc-400 text-sm">
                    Uma variedade de opções pensadas para todos os gostos e
                    momentos do dia.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Rápido e Saboroso</h3>
                  <p className="text-zinc-400 text-sm">
                    Preparo ágil sem comprometer a qualidade e o sabor de cada
                    recheado.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Feito com Carinho</h3>
                  <p className="text-zinc-400 text-sm">
                    Cada pedido é preparado com atenção aos detalhes e respeito
                    pelo cliente.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
              O que nos <span className="text-amber-400">move</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-zinc-400 max-w-2xl mx-auto"
            >
              Valores que guiam cada decisão e cada recheado que sai da nossa
              cozinha.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Missão</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Oferecer snacks de alta qualidade, com recheios generosos e
                atendimento rápido, tornando cada visita uma experiência
                prazerosa e memorável.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visão</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Ser reconhecida como a referência em snacks recheados na região,
                expandindo o nosso alcance sem nunca perder a essência artesanal.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mb-5">
                <Gem className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Valores</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Qualidade, transparência, respeito ao cliente e paixão pelo que
                fazemos. Estes são os pilares que sustentam a Recehados todos os
                dias.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
              Quem está por <span className="text-amber-400">trás</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-zinc-400 max-w-2xl mx-auto"
            >
              Pessoas reais, comprometidas em entregar o melhor a cada cliente.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {/* Senhor Abel */}
            <motion.div
              variants={fadeInUp}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center hover:border-amber-400/30 transition-colors"
            >
              <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/10 border-2 border-amber-400/30 flex items-center justify-center">
                <span className="text-3xl font-bold text-amber-400">A</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Senhor Abel</h3>
              <p className="text-amber-400 text-sm font-medium mb-4">
                Gerente & Fundador
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Responsável pela gestão diária da Recehados. Com dedicação e
                visão, garante que cada detalhe do estabelecimento funcione com
                excelência e que a qualidade se mantenha sempre elevada.
              </p>
            </motion.div>

            {/* Lioqueni */}
            <motion.div
              variants={fadeInUp}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center hover:border-amber-400/30 transition-colors"
            >
              <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/10 border-2 border-amber-400/30 flex items-center justify-center">
                <span className="text-3xl font-bold text-amber-400">L</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">
                Lioqueni Oliveira Macalo
              </h3>
              <p className="text-amber-400 text-sm font-medium mb-4">
                Desenvolvedor
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Responsável pela presença digital da Recehados. Desenvolveu esta
                plataforma com o objetivo de aproximar ainda mais os clientes da
                experiência única que só a Recehados oferece.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-zinc-800">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
            Pronto para provar os nossos{" "}
            <span className="text-amber-400">recheados</span>?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-zinc-400 mb-8 leading-relaxed"
          >
            Venha conhecer o nosso cardápio e descubra por que tantos clientes
            escolhem a Recehados todos os dias.
          </motion.p>

<motion.div variants={fadeInUp}>
  <Link
    to="/cardapio"
    className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-400 text-zinc-950 font-semibold rounded-xl hover:bg-amber-300 transition-colors"
  >
    Ver Cardápio
    <ArrowRight className="w-5 h-5" />
  </Link>
</motion.div>
        </motion.div>
      </section>
    </div>
        </Layout>

  );
};

export default SobreNos;

