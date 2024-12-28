// Updated server.js with logging for debugging

require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // MongoDB connection logic
const routes = require('./routes'); // Import main routes

// Initialize Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Debugging logs
console.log('Starting server setup...');
console.log(`PORT: ${PORT}`);

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// Connect to MongoDB
console.log('Attempting to connect to MongoDB...');
connectDB();

// Use main routes
app.use('/api', routes);
console.log('Routes have been set up.');

// Root route
app.get('/', (req, res) => {
  console.log('Root route hit.');
  res.send('Welcome to the backend API of Web Tâm Lý Sức Khỏe!');
});

// Health-check route
app.get('/health-check', (req, res) => {
  console.log('Health-check route hit.');
  res.status(200).json({ message: 'API is running smoothly!' });
});

// Handle 404 errors
app.use((req, res) => {
  console.log('404 error: route not found.');
  res.status(404).json({ message: 'API route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
