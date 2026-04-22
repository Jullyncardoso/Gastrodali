export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "tropeiro",
    title: "Tropeiro Executivo",
    subtitle: "Almoço — acompanha arroz, feijão tropeiro, batata frita, vinagrete e farofa",
    items: [
      { id: "trop-frango", name: "Tropeiro com Frango", description: "Arroz, feijão tropeiro, batata frita, vinagrete, farofa e frango.", price: 26.0, category: "tropeiro" },
      { id: "trop-alcatra", name: "Tropeiro com Alcatra", description: "Arroz, feijão tropeiro, batata frita, vinagrete, farofa e alcatra.", price: 39.0, category: "tropeiro" },
    ],
  },
  {
    id: "classicos",
    title: "Clássicos do Dia",
    subtitle: "Almoço",
    items: [
      { id: "stroganoff", name: "Strogonoff de Frango", description: "Arroz branco, strogonoff de frango, batata palha, alface e tomate.", price: 24.0, category: "classicos" },
      { id: "arrumadinho", name: "Arrumadinho", description: "Arroz branco, feijão, batata frita, alface e tomate, e tiras de frango.", price: 24.0, category: "classicos" },
      { id: "spaghetti", name: "Spaghetti com Almôndegas", description: "Macarrão tipo spaghetti ao molho vermelho com almôndegas bovinas.", price: 24.0, category: "classicos" },
    ],
  },
  {
    id: "saladas",
    title: "Monte Sua Salada",
    subtitle: "Combine ingredientes frescos com sua proteína favorita",
    items: [
      { id: "salada-i", name: "Salada I", description: "Alface, macarrão integral, milho, cenoura, cebola roxa, azeitona, uva passas, cebolinha e batata palha.", price: 27.0, category: "saladas" },
      { id: "salada-l", name: "Salada L", description: "Alface, rúcula, repolho, tomate cereja, palmito, gergelim preto, mussarela ralada, ovo de codorna e vinagrete.", price: 27.0, category: "saladas" },
      { id: "salada-d", name: "Salada D", description: "Alface, macarrão integral, milho, cenoura, cebola roxa, pimenta do reino, azeitona.", price: 27.0, category: "saladas" },
      { id: "salada-a", name: "Salada A", description: "Alface, tomate cereja, cenoura, cebola roxa, brócolis americano, orégano e mussarela ralada.", price: 27.0, category: "saladas" },
      { id: "prot-alcatra", name: "+ Alcatra", description: "Adicional de proteína para qualquer salada.", price: 12.0, category: "saladas" },
      { id: "prot-atum", name: "+ Atum Desfiado", description: "Adicional de proteína para qualquer salada.", price: 13.0, category: "saladas" },
      { id: "prot-frango-grelhado", name: "+ Frango Grelhado", description: "Adicional de proteína para qualquer salada.", price: 8.0, category: "saladas" },
      { id: "prot-frango-desfiado", name: "+ Frango Desfiado", description: "Adicional de proteína para qualquer salada.", price: 5.0, category: "saladas" },
    ],
  },
  {
    id: "compartilhar",
    title: "Para Compartilhar",
    subtitle: "Jantar — petiscos e pizzas para a mesa",
    items: [
      { id: "alcatra-fritas", name: "Alcatra com Fritas", description: "Tiras de alcatra (500g) com cebola e tomate cereja, batata frita com tempero especial e maionese de tabasco.", price: 89.9, category: "compartilhar" },
      { id: "batata-canoa", name: "Batata Canoa", description: "Tradicional batata canoa com tempero à base de páprica e maionese de tabasco.", price: 42.9, category: "compartilhar" },
      { id: "isca-frango", name: "Isca de Frango", description: "Aprox. 400g de iscas crocantes de frango.", price: 52.9, category: "compartilhar" },
      { id: "isca-peixe", name: "Isca de Peixe", description: "Iscas de peixe crocantes.", price: 59.9, category: "compartilhar" },
      { id: "batata-frita", name: "Batata Frita", description: "Porção de batata frita.", price: 29.9, category: "compartilhar" },
      { id: "pizza-frango", name: "Pizza Frango com Catupiry", description: "Frango, mussarela, catupiry e orégano.", price: 52.9, category: "compartilhar" },
      { id: "pizza-bacon", name: "Pizza Bacon com Catupiry", description: "Mussarela, presunto, bacon e catupiry.", price: 52.9, category: "compartilhar" },
      { id: "pizza-francesa", name: "Pizza Francesa", description: "Presunto, bacon, mussarela, ovo, calabresa e cebola.", price: 52.9, category: "compartilhar" },
      { id: "pizza-calabresa", name: "Pizza Calabresa", description: "Mussarela, calabresa e cebola.", price: 52.9, category: "compartilhar" },
      { id: "pizza-portuguesa", name: "Pizza Portuguesa", description: "Presunto, mussarela, frango, bacon, cebola, ovo e azeitona.", price: 52.9, category: "compartilhar" },
    ],
  },
  {
    id: "especiais",
    title: "Especiais para Você",
    subtitle: "Pratos assinatura do chef",
    items: [
      { id: "fettuccine-alcatra", name: "Fettuccine ao Molho Branco com Alcatra ao Madeira", description: "Fettuccine ao molho branco com filé ao molho madeira.", price: 57.0, category: "especiais" },
      { id: "fettuccine-camarao", name: "Fettuccine ao Molho de Camarão", description: "Fettuccine envolto em molho cremoso de camarão.", price: 67.0, category: "especiais" },
      { id: "tilapia-belle", name: "Tilápia à Belle Meunière", description: "Tilápia grelhada, arroz de brócolis, purê de batata e molho à base de camarão, alcaparras, champignon e manteiga.", price: 56.0, category: "especiais" },
      { id: "tilapia-grelhada", name: "Tilápia Grelhada", description: "Tilápia, arroz ao alho, salada verde, fritas e maionese de repolho.", price: 46.0, category: "especiais" },
    ],
  },
  {
    id: "sandubas",
    title: "Sandubas",
    subtitle: "Jantar — hambúrgueres artesanais e combos",
    items: [
      { id: "burgao-dali", name: "Burgão Dalí", description: "Blend artesanal de costela bovina 180g, cebola crispy, cogumelos confitados, pão brioche artesanal. Acompanha batata frita ou canoa.", price: 44.9, category: "sandubas" },
      { id: "espectro-cheddar", name: "El Espectro del Cheddar", description: "Blend artesanal 180g, pão brioche, cheddar, tiras de bacon, molho e batata frita ou canoa.", price: 42.9, category: "sandubas" },
      { id: "catupiry-supremo", name: "Catupiry Supremo", description: "Blend artesanal 180g, brioche, tiras de bacon, maionese de tabasco e batatas.", price: 42.9, category: "sandubas" },
      { id: "combo-xsalada", name: "Combo X-Salada", description: "Brioche, mussarela, hambúrguer bovino, alface, tomate, maionese + batata + refrigerante.", price: 27.9, category: "sandubas" },
      { id: "combo-cheddar", name: "Combo Cheddar", description: "Brioche, cheddar, hambúrguer bovino, bacon, maionese + batata + refrigerante.", price: 29.9, category: "sandubas" },
      { id: "combo-xegg", name: "Combo X-Egg Salada", description: "Brioche, mussarela, 2 bifes, bacon, ovo, maionese + batata + refrigerante.", price: 36.9, category: "sandubas" },
      { id: "dali-dog-fraldinha", name: "Dali Dog Fraldinha", description: "Vinagrete, maionese gourmet, catupiry, batata palha e cebola crispy.", price: 31.9, category: "sandubas" },
      { id: "dali-dog-lombo", name: "Dali Dog de Lombo", description: "Lombo desfiado, maionese gourmet, mussarela, cebola caramelizada e cebola crispy.", price: 31.9, category: "sandubas" },
      { id: "dali-dog-salsicha", name: "Dali Dog de Salsicha", description: "Maionese gourmet, milho, cheddar, queijo ralado, ovo de codorna, cebola crispy e batata palha.", price: 26.9, category: "sandubas" },
      { id: "box-kids", name: "Box Dalí Kids", description: "Cheesburguinho ou hamburguinho com cheddar, batata frita, Danoninho, suco Kapo de uva, bala Fini e massinha de modelar.", price: 37.9, category: "sandubas" },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { id: "coca", name: "Coca-Cola", description: "Lata 350ml.", price: 7.0, category: "bebidas" },
      { id: "coca-zero", name: "Coca Zero", description: "Lata 350ml.", price: 7.0, category: "bebidas" },
      { id: "fanta-uva", name: "Fanta Uva", description: "Lata 350ml.", price: 7.0, category: "bebidas" },
      { id: "fanta-laranja", name: "Fanta Laranja", description: "Lata 350ml.", price: 7.0, category: "bebidas" },
      { id: "sprite", name: "Sprite", description: "Lata 350ml.", price: 7.0, category: "bebidas" },
      { id: "delvalle-uva", name: "Del Valle Uva", description: "Suco de uva.", price: 7.0, category: "bebidas" },
      { id: "tonica", name: "Tônica", description: "Água tônica.", price: 8.0, category: "bebidas" },
      { id: "h2o-limao", name: "H2O Limão", description: "Bebida com gás sabor limão.", price: 9.0, category: "bebidas" },
      { id: "h2o-limoneto", name: "H2O Limoneto", description: "Bebida com gás sabor limoneto.", price: 9.0, category: "bebidas" },
      { id: "suco-laranja", name: "Suco de Laranja Natural", description: "Espremido na hora.", price: 10.0, category: "bebidas" },
      { id: "suco-morango", name: "Suco de Morango", description: "Refrescante e natural.", price: 12.0, category: "bebidas" },
      { id: "agua-com", name: "Água com Gás", description: "500ml.", price: 5.0, category: "bebidas" },
      { id: "agua-sem", name: "Água sem Gás", description: "500ml.", price: 5.0, category: "bebidas" },
    ],
  },
];

export const allItems = menu.flatMap((c) => c.items);
export const findItem = (id: string) => allItems.find((i) => i.id === id);
