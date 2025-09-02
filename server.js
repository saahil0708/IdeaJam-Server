import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
import TeamRoutes from './Routes/Team.Routes.js';

dotenv.config();

import DB from './Config/DB.js';

DB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors(
//     {
//         origin: [ 'https://ideajam.vercel.app', 'http://localhost:3000',],
//     }
// ));

app.use(cors({
  origin: [
    'https://ideajam.theuniques.in',
    'https://ideajam.vercel.app',
    'http://localhost:3000',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Handle preflight OPTIONS requests globally
app.options('*', cors({
  origin: [
    'https://ideajam.vercel.app',
    'http://localhost:3000',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to IdeaJam 2.0 Backend');
});

app.use('/teams', TeamRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
