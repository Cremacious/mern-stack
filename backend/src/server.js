import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use('/api/notes', notesRoutes);

connectDB();

app.listen(PORT, () => {
  console.log('Server on port 3000');
});
