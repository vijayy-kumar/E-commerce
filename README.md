# NEXORA — Full Project

E-commerce store: static front-end + Node.js/Express/MongoDB backend.

```
nexora-project/
├── frontend/          → index.html, style.css, script.js (original UI, localStorage-based for now)
└── backend/           → Express + MongoDB + Mongoose + JWT/bcrypt API (see backend/README.md)
```

## Quick start

**Backend**
```bash
cd backend
npm install
cp .env.example .env      # set MONGO_URI and JWT_SECRET
npm run seed               # loads the 59 products into MongoDB
npm run dev                 # starts API on http://localhost:5000
```
Full API reference: `backend/README.md`.

**Frontend**
Currently `frontend/script.js` manages users/cart/wishlist/orders with
`localStorage` and can be opened directly in a browser (or served with any
static server, e.g. `npx serve frontend`).

## Connecting the two

The frontend isn't wired to the backend API yet — it still uses
`localStorage` for auth, cart, wishlist and orders. To go live, `script.js`
needs its `state.users` / `state.cart` / `state.wishlist` / `state.orders`
logic replaced with `fetch` calls to the endpoints documented in
`backend/README.md`, storing the JWT after login/register and sending it as
`Authorization: Bearer <token>` on cart/wishlist/order requests.
