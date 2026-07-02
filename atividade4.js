const comanda = [
  { pedido: 'Torresmo', preco: 39.5, quantidade: 1 },
  { pedido: 'Bebida', preco: 7.5, quantidade: 5 },
  { pedido: 'Batata Frita', preco: 40.0, quantidade: 1 },
  { pedido: 'Chopp', preco: 12.0, quantidade: 2 },
];

let totalProdutos = 0;

for (let item of comanda) {
  totalProdutos += item.preco * item.quantidade;
}

let totalComServico = totalProdutos + totalProdutos * 0.1;

console.log('Valor dos produtos: R$' + totalProdutos);
console.log('Valor com 10% de serviço: R$' + totalComServico);
