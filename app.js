import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import authroutes from './routes/authRoutes.js'
import bookroutes from './routes/bookRoutes.js'

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Define routes
app.use('/api/auth', authroutes);
app.use('/api/books', bookroutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
