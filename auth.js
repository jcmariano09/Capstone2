const express = require('express');
const app = express();

// Simulated admin token for demonstration
const ADMIN_TOKEN = 'your-admin-token';

app.use(express.json());

// Endpoint for creating a product
app.post('/products', (req, res) => {
  const authToken = req.header('Authorization');
  
  if (authToken === `Bearer ${ADMIN_TOKEN}`) {
    // User is authorized as an admin
    const newProduct = req.body;
    // Logic to create the product in your database goes here
    
    res.status(201).json({ message: 'Product created successfully' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
