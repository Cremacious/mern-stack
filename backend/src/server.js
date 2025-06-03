import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';
import rateLimiter from '../middleware/rateLimiter.js';
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(rateLimiter);
app.use(
  cors({
    origin: 'http://localhost:5173', // Remove trailing slash
  })
);

app.use('/api/notes', notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server on port', PORT);
  });
});
