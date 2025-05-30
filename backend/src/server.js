import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.use((req, res, next) => {
  console.log('W got a new req');
  next()
})

app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
  console.log('Server on port', PORT);
});
