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

/* Enable __dirname in ES modules */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* -----------------------------------
   ✅ Configuration Constants
------------------------------------ */
const FRONTEND_URL = 'https://flipr-task-yashraj.onrender.com';
const isProd = process.env.NODE_ENV === 'production';

/* -----------------------------------
   ✅ Trust Render's Proxy
------------------------------------ */
app.set('trust proxy', 1); // Required for secure cookies over HTTPS (Render)

/* -----------------------------------
   ✅ CORS Config for Cookie Auth
------------------------------------ */
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

/* -----------------------------------
   ✅ Body Parsers
------------------------------------ */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -----------------------------------
   ✅ Session (Cookie) Config
------------------------------------ */
app.use(session({
  name: 'flipr.sid',
  secret: process.env.SESSION_SECRET || 'flipr_secret_default',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,                         // ✅ Required for HTTPS
    httpOnly: true,                       // Prevents client-side JS access
    sameSite: 'none',                     // ✅ Required for cross-site cookies (mobile too)
    maxAge: 24 * 60 * 60 * 1000           // 1 day
  }
}));

/* -----------------------------------
   ✅ Static Files (Image Access)
------------------------------------ */
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

/* -----------------------------------
   ✅ API Routes
------------------------------------ */
app.use('/api/auth',        authRoutes);
app.use('/api/projects',    projectRoutes);
app.use('/api/clients',     clientRoutes);
app.use('/api/contacts',    contactRoutes);
app.use('/api/subscribers', subscriberRoutes);

/* -----------------------------------
   ✅ Health Check Route
------------------------------------ */
app.get('/', (_req, res) => res.send('✅ Flipr MERN backend is running.'));

export default app;
