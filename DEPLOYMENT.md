# Deployment Guide: LuxeRentals

This guide provides step-by-step instructions for deploying your full-stack application to the internet. We will deploy the **Backend (Node.js/Express)** to Render and the **Frontend (React/Vite)** to Vercel.

---

## 1. Prepare Your Database (MongoDB Atlas)
Since your app is moving from your local computer to the internet, it can no longer use `127.0.0.1` (localhost) for the database.
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create a free account.
2. Build a new free "M0" cluster.
3. Under "Database Access", create a database user and password.
4. Under "Network Access", add `0.0.0.0/0` to allow access from anywhere (or configure it specifically for Render's IPs).
5. Click **Connect**, choose "Connect your application", and copy the **Connection String** (it will look like `mongodb+srv://<username>:<password>@cluster0...`).

---

## 2. Deploying the Backend to Render

1. Push your entire project (both `client` and `server` folders) to a GitHub repository. *(Ensure `node_modules` are excluded via `.gitignore`)*.
2. Go to [Render](https://render.com/) and create a free account.
3. Click **New +** and select **Web Service**.
4. Connect your GitHub account and select your repository.
5. Fill out the deployment details:
   - **Name:** luxerentals-api
   - **Root Directory:** `server` *(Important: Tell Render to only build the server folder)*
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Scroll down to **Environment Variables** and add:
   - `NODE_ENV` = `production`
   - `JWT_SECRET` = `supersecretjwtkey_luxerentals2026`
   - `MONGODB_URI` = `[Paste your MongoDB Atlas Connection String here]`
7. Click **Create Web Service**. 
8. Wait a few minutes for the build to finish. Once it says "Live", copy the Render URL (e.g., `https://luxerentals-api.onrender.com`).

---

## 3. Deploying the Frontend to Vercel

1. Go to [Vercel](https://vercel.com/) and create a free account using your GitHub.
2. Click **Add New...** -> **Project**.
3. Import the exact same GitHub repository you used for Render.
4. In the configuration screen:
   - **Framework Preset:** Vite
   - **Root Directory:** Edit this and select the `client` folder.
5. Open the **Environment Variables** section and add:
   - `VITE_API_URL` = `https://luxerentals-api.onrender.com/api` *(Use the Render URL you copied earlier!)*
6. Click **Deploy**.
7. Vercel will automatically read the `vercel.json` file we created earlier to handle your SPA routing, build the React app, and give you a live public URL!

---

### Verifying the Deployment
1. Open your new Vercel URL.
2. The homepage should load perfectly.
3. If the vehicles show up, it means the frontend (Vercel) successfully talked to the backend (Render), which successfully fetched data from the database (MongoDB Atlas)!
