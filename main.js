const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000; // Choose a suitable port number

const url = 'mongodb://localhost:27017'; // Change this to your MongoDB server URL
const dbName = 'ecommerce_db';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json()); // Parse JSON in request body

app.get('/products', (req, res) => {
});

app.get('/products/:productId', (req, res) => {

  const productId = parseInt(req.params.productId);

  productsCollection.findOne({ product_id: productId }, (err, product) => {
    if (err) {
      console.error('Error retrieving product:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  });
});

app.put('/products/:productId', (req, res) => {
  
  const productId = parseInt(req.params.productId);
  const updatedProduct = req.body;

  productsCollection.updateOne(
    { product_id: productId },
    { $set: updatedProduct },
    (err, result) => {
      if (err) {
        console.error('Error updating product:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.json({ message: 'Product updated successfully' });
    }
  );
});

app.put('/products/:productId/archive', (req, res) => {

  const productId = parseInt(req.params.productId);

  productsCollection.updateOne(
    { product_id: productId },
    { $set: { archived: true } },
    (err, result) => {
      if (err) {
        console.error('Error archiving product:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.json({ message: 'Product archived successfully' });
    }
  );
});

app.put('/products/:productId/activate', (req, res) => {

  const productId = parseInt(req.params.productId);

  productsCollection.updateOne(
    { product_id: productId },
    { $set: { archived: false } },
    (err, result) => {
      if (err) {
        console.error('Error activating product:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.json({ message: 'Product activated successfully' });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
class User {
  constructor(id, username, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

class Product {
  constructor(id, name, description, price,) {
    this.product_id = product_id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

class Order {
  constructor(id,product_id,userId, quantity, totalAmount, ) {
    this.id = id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.userId = userId;
    this.totalAmount = totalAmount;

    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}