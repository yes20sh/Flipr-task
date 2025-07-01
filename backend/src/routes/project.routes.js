import express from 'express';
import multer from 'multer';

import {
  getAllProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject
} from '../controllers/project.controller.js';

import { requireAuth } from '../middleware/auth.middleware.js';

// ✅ Direct multer setup using memoryStorage (no external middleware file)
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

/* ------------------------ PUBLIC ROUTES ------------------------ */
router.get('/', getAllProjects);              // Get all projects (without image binary)
router.get('/:id', getProjectById);           // Get project by ID (with base64 image)

/* ------------------------ PROTECTED ROUTES --------------------- */
router.post('/', requireAuth, upload.single('image'), addProject);
router.put('/:id', requireAuth, upload.single('image'), updateProject);
router.delete('/:id', requireAuth, deleteProject);

export default router;
