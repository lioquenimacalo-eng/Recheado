const Produtos = [
  // SANDES
  {
    id: 1,
    nome: "SANDES SIMPLES",
    categoria: "SANDES",
    preco: 1500,
    moeda: "KZ",
    descricao: "Sandes simples do Recheado",
    imagem: "./public/1785077259258_1.webp",
    slug: "sandes-simples",
    disponivel: true,
    estoque: 999
  },
  {
    id: 2,
    nome: "PEDE MAIS",
    categoria: "SANDES",
    preco: 2000,
    moeda: "KZ",
    descricao: "Sandes com recheio extra",
    imagem: "./public/comFrango.webp",
    slug: "pede-mais",
    disponivel: true,
    estoque: 999
  },
  {
    id: 3,
    nome: "SANDES COM BACON",
    categoria: "SANDES",
    preco: 1900,
    moeda: "KZ",
    descricao: "Sandes com bacon crocante",
    imagem: "./public/SandesBaicon.webp",
    slug: "sandes-com-bacon",
    disponivel: true,
    estoque: 999
  },
  {
    id: 4,
    nome: "SANDES COM QUEIJO",
    categoria: "SANDES",
    preco: 1900,
    moeda: "KZ",
    descricao: "Sandes com queijo derretido",
    imagem: "./public/SandesQueijo.webp",
    slug: "sandes-com-queijo",
    disponivel: true,
    estoque: 999
  },
  // HAMBURGUER
  {
    id: 5,
    nome: "HAMBURGUER SIMPLES",
    categoria: "HAMBURGUER",
    preco: 2000,
    moeda: "KZ",
    descricao: "Hamburguer simples",
    imagem: "./public/HamvurgerSimples.webp",
    slug: "hamburguer-simples",
    disponivel: true,
    estoque: 999
  },
  {
    id: 6,
    nome: "HAMBURGUER COMPOSTO",
    categoria: "HAMBURGUER",
    preco: 2500,
    moeda: "KZ",
    descricao: "Hamburguer composto completo",
    imagem: "./public/humburgT.webp",
    slug: "hamburguer-composto",
    disponivel: true,
    estoque: 999
  },
  // FAHITA
  {
    id: 7,
    nome: "FAHITA",
    categoria: "FAHITA",
    preco: 2000,
    moeda: "KZ",
    descricao: "Fahita recheada",
    imagem: "./public/Fahita.webp",
    slug: "fahita",
    disponivel: true,
    estoque: 999
  },
  // ESPECIAIS
  {
    id: 8,
    nome: "X - TUDO",
    categoria: "ESPECIAIS",
    preco: 3000,
    moeda: "KZ",
    descricao: "X-Tudo completo",
    imagem: "./public/x-tudo.webp",
    slug: "x-tudo",
    disponivel: true,
    estoque: 999
  },
  {
    id: 9,
    nome: "RECHEADO",
    categoria: "ESPECIAIS",
    preco: 3000,
    moeda: "KZ",
    descricao: "Sandes Recheado especial",
    imagem: "./public/brincslhao.webp",
    slug: "recheado-especial",
    disponivel: true,
    estoque: 999
  },
  // ACOMPANHAMENTOS
  {
    id: 10,
    nome: "RISSÓIS",
    categoria: "ACOMPANHAMENTOS",
    preco: 200,
    moeda: "KZ",
    descricao: "Rissóis - 3 por 500 KZ",
    precoPromocao: { qtd: 3, preco: 500 },
    imagem: "",
    slug: "rissois",
    disponivel: true,
    estoque: 999
  },
  {
    id: 11,
    nome: "DOSE DE BATATA",
    categoria: "ACOMPANHAMENTOS",
    preco: 1000,
    moeda: "KZ",
    descricao: "Dose de batata frita",
    imagem: "",
    slug: "dose-de-batata",
    disponivel: true,
    estoque: 999
  },
  // OUTROS
  {
    id: 12,
    nome: "MAGOGA TRADICIONAL",
    categoria: "OUTROS",
    preco: 2000,
    moeda: "KZ",
    descricao: "Magoga tradicional",
    imagem: "",
    slug: "magoga-tradicional",
    disponivel: true,
    estoque: 999
  }
];

export default Produtos;