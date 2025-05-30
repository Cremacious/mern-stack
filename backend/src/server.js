import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use('/api/notes', notesRoutes);

connectDB();

//Middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log('Server on port', PORT);
});
