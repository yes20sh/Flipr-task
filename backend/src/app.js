import express from 'express';
import cors from 'cors';
import session from 'express-session';
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

/* Enable __dirname in ES Module */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ---------- Middlewares ---------- */
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form-encoded data

app.use(session({
  secret: process.env.SESSION_SECRET || 'flipr_admin_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));

/* ---------- Static Folder for Image Access ---------- */
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

/* ---------- API Routes ---------- */
app.use('/api/auth',        authRoutes);
app.use('/api/projects',    projectRoutes);
app.use('/api/clients',     clientRoutes);
app.use('/api/contacts',    contactRoutes);
app.use('/api/subscribers', subscriberRoutes);

/* ---------- Health Check ---------- */
app.get('/', (_req, res) => res.send('✅ Flipr MERN backend is up!'));

export default app;
