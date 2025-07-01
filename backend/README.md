
# 🚀 Flipr MERN Full Stack Application

This project is the solution to the **Flipr Full Stack Development Task**. It includes:

- A public **Landing Page**
- A secure **Admin Panel**
- A fully functional **MongoDB-backed Express API**
- A React frontend styled with Tailwind CSS

---

## 🧱 Tech Stack

| Layer     | Tech                     |
|-----------|--------------------------|
| Frontend  | React.js, Tailwind CSS   |
| Backend   | Node.js, Express.js      |
| Database  | MongoDB Atlas (Mongoose) |
| Auth      | Session-based login      |
| Uploads   | Multer + Sharp           |

---

## 📂 Folder Structure

```
flipr-mern-app/
├── client/               # React frontend
├── server/               # Express backend
├── uploads/              # Cropped images
├── README.md             # You're here!
└── .gitignore
```

---

## ✨ Features

### 🌐 Landing Page
- View list of Projects
- View list of Happy Clients
- Contact Form (stored in DB)
- Newsletter Subscription (stored in DB)

### 🔐 Admin Panel
- Simple username/password login
- Manage (Create/Delete) Projects with image upload
- Manage (Create/Delete) Clients with image upload
- View submitted Contact Forms
- View subscribed Newsletter Emails

---

## 📦 Backend Setup (`/server`)

### 1. Navigate to backend folder

```bash
cd server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/flipr
FRONTEND_URL=http://localhost:5173
SESSION_SECRET=someSecret
```

### 4. Start the backend

```bash
npm run dev
```

> Note: Add this script to `package.json`:
```json
"scripts": {
  "dev": "nodemon src/server.js"
}
```

---

## 📂 Backend Routes

| Method | Route                      | Description                    |
|--------|----------------------------|--------------------------------|
| POST   | `/api/auth/login`          | Admin login                    |
| POST   | `/api/auth/create-admin`   | Create new admin               |
| POST   | `/api/auth/logout`         | Logout                         |
| GET    | `/api/projects`            | Get all projects               |
| POST   | `/api/projects`            | Add project (admin only)       |
| DELETE | `/api/projects/:id`        | Delete project (admin only)    |
| GET    | `/api/clients`             | Get all clients                |
| POST   | `/api/clients`             | Add client (admin only)        |
| DELETE | `/api/clients/:id`         | Delete client (admin only)     |
| GET    | `/api/contacts`            | Get contact entries            |
| POST   | `/api/contacts`            | Submit contact form            |
| GET    | `/api/subscribers`         | Get newsletter emails          |
| POST   | `/api/subscribers`         | Subscribe email                |

---

## 📷 Image Upload

- Images are uploaded using `multer`
- Cropped using `sharp` to **450x350**
- Stored in `uploads/cropped/`
- Accessible via:
  ```
  http://localhost:5000/uploads/cropped/<filename>
  ```

---

## 🧑‍💻 Frontend Setup (`/client`)

### 1. Navigate to frontend folder

```bash
cd client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

---

## 🧪 Admin Seed Example

To create your first admin:

```bash
POST /api/auth/create-admin
{
  "username": "admin",
  "password": "admin123"
}
```

---

## 🛡 Auth & Protection

- Session stored via `express-session`
- Admin-only routes are protected using `requireAuth` middleware
- Frontend must use Axios with `withCredentials: true`

---

## 🔗 Deployment Tips

- Use **Render** or **Cyclic** for backend
- Use **Vercel** or **Netlify** for frontend
- Use **MongoDB Atlas** for DB (Free Tier)
- Make sure to:
  - Set env vars on the host
  - Enable CORS + session credentials
  - Expose `/uploads` folder publicly

---

## ✅ Task Requirements Checklist

| Feature                           | Status     |
|----------------------------------|------------|
| Landing Page: Project section    | ✅ Complete |
| Landing Page: Client section     | ✅ Complete |
| Contact Form                     | ✅ Complete |
| Newsletter Section               | ✅ Complete |
| Admin Login                      | ✅ Complete |
| Project Management               | ✅ Complete |
| Client Management                | ✅ Complete |
| View Contact Form entries        | ✅ Complete |
| View Subscribed emails           | ✅ Complete |
| Image cropping (450x350)         | ✅ Bonus ✅ |

---

## 🧠 Author

> This project is built for **Flipr's Full Stack Development Placement Task**  
> Developed with ❤️ by [Your Name]
