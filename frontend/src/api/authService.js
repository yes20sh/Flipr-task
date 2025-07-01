import axios from './axios';

// 🔐 Login Admin
export const login = async (username, password) => {
  const res = await axios.post('/auth/login', { username, password });
  return res.data;
};

// 🔓 Logout Admin
export const logout = async () => {
  const res = await axios.post('/auth/logout');
  return res.data;
};

// 📝 Register New Admin
export const register = async (fullname, username, password) => {
  const res = await axios.post('/auth/register', {
    fullname,
    username,
    password
  });
  return res.data;
};

// 👥 Get All Admin Users (excluding passwords)
export const getAllUsers = async () => {
  const res = await axios.get('/auth/users');
  return res.data;
};

// ❌ Delete Admin User by ID
export const deleteUser = async (id) => {
  const res = await axios.delete(`/auth/users/${id}`);
  return res.data;
};

// ✏️ (Optional) Update Admin User by ID
export const updateUser = async (id, updatedData) => {
  const res = await axios.put(`/auth/users/${id}`, updatedData);
  return res.data;
};
