const express = require('express');
const router = express.Router();

// Simulated product data for demonstration
const products = [
  new Product(1, 'Product 1', 'Description for Product 1', 19.99),
  new Product(2, 'Product 2', 'Description for Product 2', 29.99),
  // Add more products as needed
];

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);

  const product = products.find(product => product.product_id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

router.put('/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  const updatedProduct = req.body;

  const productIndex = products.findIndex(product => product.product_id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Update the product data
  products[productIndex] = { ...products[productIndex], ...updatedProduct };

  res.json({ message: 'Product updated successfully' });
});

router.put('/:productId/archive', (req, res) => {
  const productId = parseInt(req.params.productId);

  const productIndex = products.findIndex(product => product
