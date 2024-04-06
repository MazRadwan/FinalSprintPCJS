const products = [
  { id: 1, name: 'Shave Gel', description: 'Description of Product 1', price: 10.99},
  { id: 2, name: 'Post-Shave Balm', description: 'Description of Product 2', price: 27.99},
  { id: 3, name: 'Premium Shaver  ', description: 'Description of Product 3', price: 19.99},
  { id: 4, name: 'Shave Cream', description: 'Description of Product 4', price: 9.99}
];

export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);