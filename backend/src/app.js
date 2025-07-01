import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes       from './routes/auth.routes.js';
import projectRoutes    from './routes/project.routes.js';
import clientRoutes     from './routes/client.routes.js';
import contactRoutes    from './routes/contact.routes.js';
import subscriberRoutes from './routes/subscriber.routes.js';

dotenv.config();
const app = express();

app.use(cors({
  origin:'https://flipr-task-yashraj.onrender.com/',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api/auth',        authRoutes);
app.use('/api/projects',    projectRoutes);
app.use('/api/clients',     clientRoutes);
app.use('/api/contacts',    contactRoutes);
app.use('/api/subscribers', subscriberRoutes);

app.get('/', (_req, res) => res.send('✅ Flipr MERN backend is up!'));

export default app;
