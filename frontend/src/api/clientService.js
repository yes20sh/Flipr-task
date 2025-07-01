// client/src/api/clientService.js
import axios from './axios';

/**
 * 📦 Fetch all clients (returns imageUrl as base64 data URL)
 */
export const fetchClients = async () => {
  const res = await axios.get('/clients');
  return res.data;
};

/**
 * ❌ Remove fetchClientById – not needed unless you reintroduce it
 */
// export const fetchClientById = async (id) => {
//   const res = await axios.get(`/clients/${id}`);
//   return res.data;
// };

/**
 * ➕ Add a new client
 * @param {object} data – { name, designation, description, image (base64 string) }
 */
export const addClient = async (data) => {
  const res = await axios.post('/clients', data, {
    headers: { 'Content-Type': 'application/json' }
  });
  return res.data;
};

/**
 * ✏️ Update an existing client
 * @param {string} id – client ID
 * @param {object} data – same format as addClient (image optional)
 */
export const updateClient = async (id, data) => {
  const res = await axios.put(`/clients/${id}`, data, {
    headers: { 'Content-Type': 'application/json' }
  });
  return res.data;
};

/**
 * ❌ Delete a client by ID
 */
export const deleteClient = async (id) => {
  const res = await axios.delete(`/clients/${id}`);
  return res.data;
};
