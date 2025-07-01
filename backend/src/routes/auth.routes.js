import express from 'express';
import {
  login,
  register,         // ✅ renamed from createAdmin
  checkAuth,
  logout,
  getAllUsers,
  deleteUser,
  updateUser        // ✅ optional: if you add update functionality
} from '../controllers/auth.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';

const router = express.Router();

// 🔐 Auth Routes
router.post('/login', login);
router.post('/register', requireAuth, register);   // 👤 Create new admin (only for logged-in admins)
router.post('/logout', logout);
router.get('/check', checkAuth);

// 👥 Admin User Management
router.get('/users', requireAuth, getAllUsers);          // Get all admins (excluding passwords)
router.delete('/users/:id', requireAuth, deleteUser);    // Delete admin by ID
router.put('/users/:id', requireAuth, updateUser);       // ✅ Optional: Update admin by ID

export default router;
