// server/src/routes/client.routes.js
import express from 'express';
import {
  getAllClients,
  addClient,
  updateClient,
  deleteClient
} from '../controllers/client.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';

const router = express.Router();

/* ─────────── READ ─────────── */
router.get('/', getAllClients);        // List clients (no image buffer)

/* ─────────── WRITE (requires auth) ─────────── */
router.post('/', requireAuth, addClient);       // Create new client
router.put('/:id', requireAuth, updateClient);  // Update client
router.delete('/:id', requireAuth, deleteClient); // Delete client

export default router;
