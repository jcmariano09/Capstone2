const express = require('express');
const router = express.Router();

// Simulated user data for demonstration
const users = [
  new User(1, 'admin', 'admin@example.com', 'adminpassword'),
  new User(2, 'user1', 'user1@example.com', 'user1password'),
  // Add more users as needed
];

router.post('/register', (req, res) => {
  const newUser = req.body;

  // You may want to add more validation and error handling here

  // Simulate adding the new user to the users array
  users.push(newUser);

  res.json({ message: 'User registered successfully' });
});

router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);

  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

router.put('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const updatedUser = req.body;

  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Update the user data
  users[userIndex] = { ...users[userIndex], ...updatedUser };

  res.json({ message: 'User updated successfully' });
});

module.exports = router;

class User {
  constructor(id, username, email, password) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
