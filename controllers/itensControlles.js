let items = [
    { id: 1, name: 'Carro Esportivo', description: 'Carro rápido e luxuoso', price: 50000 },
    { id: 2, name: 'Moto de Aventura', description: 'Moto para trilhas e aventuras', price: 12000 },
    { id: 3, name: 'Bicicleta Urbana', description: 'Bicicleta confortável para a cidade', price: 800 }
  ];
  
  exports.getItems = (req, res) => {
    res.json(items);
  };
  