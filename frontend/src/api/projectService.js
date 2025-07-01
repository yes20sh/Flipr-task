// client/src/api/projectService.js
import axios from './axios';

/**
 * 📦 Fetch all projects (excluding image binary)
 */
export const fetchProjects = async () => {
  const res = await axios.get('/projects');
  return res.data;
};

/**
 * 📦 Fetch a single project by ID (includes image as base64)
 */
export const fetchProjectById = async (id) => {
  const res = await axios.get(`/projects/${id}`);
  return res.data;
};

/**
 * ➕ Add a new project (with image)
 * @param {FormData} formData - Should contain fields + file (image)
 */
export const addProject = async (formData) => {
  const res = await axios.post('/projects', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return res.data;
};

/**
 * ✏️ Update a project by ID (with optional image)
 * @param {string} id - Project ID
 * @param {FormData} formData - FormData including fields to update
 */
export const updateProject = async (id, formData) => {
  const res = await axios.put(`/projects/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return res.data;
};

/**
 * ❌ Delete a project by ID
 */
export const deleteProject = async (id) => {
  const res = await axios.delete(`/projects/${id}`);
  return res.data;
};
