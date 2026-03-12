# Backend App

Express.js backend with EJS views, MongoDB.

## Local Run
1. `npm install`
2. Copy `.env.example` to `.env`, set MONGO_URI (Atlas free or local).
3. `npm run dev` (nodemon) or `npm start` (production).

Login: admin@example.com / admin (mock).

## Deployment (Railway/Render/Heroku)
1. Push repo.
2. Set env vars: MONGO_URI.
3. Build cmd: `npm install`
4. Start cmd: `npm start`
Port: auto-detected (process.env.PORT || 5000 - update index.js if needed).

## Routes
- /store : Products JSON
- /auth/login : Admin login
- /products, /users : Admin dashboard

DB optional - mocks for store/auth.
