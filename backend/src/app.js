// server.js  (or index.js)
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

/* ---------- Enable __dirname in ES modules ---------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

/* ---------- Trust Render’s reverse‑proxy ---------- */
app.set('trust proxy', 1); // 1 = first proxy hop

/* ---------- CORS ---------- */
const FRONTEND_URL = 'https://flipr-task-yashraj.onrender.com'; // exact domain
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

/* ---------- Body parsers ---------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- Session ---------- */
app.use(session({
  name: 'flipr.sid',                    // custom cookie name (optional)
  secret: process.env.SESSION_SECRET || 'flipr_admin_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure   : process.env.NODE_ENV === 'production', // 👉 HTTPS only in prod
    httpOnly : true,
    sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'lax', // 👉 allow cross‑site in prod
    maxAge   : 24 * 60 * 60 * 1000                       // 1 day
  }
}));

/* ---------- Static assets ---------- */
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

/* ---------- Routes ---------- */
app.use('/api/auth',        authRoutes);
app.use('/api/projects',    projectRoutes);
app.use('/api/clients',     clientRoutes);
app.use('/api/contacts',    contactRoutes);
app.use('/api/subscribers', subscriberRoutes);

/* ---------- Health Check ---------- */
app.get('/', (_req, res) => res.send('✅ Flipr MERN backend is up!'));

export default app;
