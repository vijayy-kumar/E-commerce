# NEXORA Backend

Node.js + Express + MongoDB (Mongoose) + JWT/bcrypt backend for the NEXORA
front-end (`index.html` / `style.css` / `script.js`). It replaces the
`localStorage`-based users/cart/wishlist/orders in the original `script.js`
with a real API.

## 1. Setup

```bash
cd nexora-backend
npm install
cp .env.example .env
# edit .env: set MONGO_URI (local Mongo or Atlas) and a strong JWT_SECRET
```

## 2. Seed the product catalog

The 59 products that used to be hard-coded in `script.js` are included in
`seed/products.json`. Load them into MongoDB with:

```bash
npm run seed
```

## 3. Run the server

```bash
npm run dev     # nodemon, auto-restart
# or
npm start
```

Server starts on `http://localhost:5000` (or `PORT` from `.env`).
Health check: `GET /api/health`.

## 4. API Reference

All request/response bodies are JSON. Protected routes require:
`Authorization: Bearer <token>`.

### Auth
| Method | Route              | Body                          | Notes            |
|--------|--------------------|--------------------------------|-------------------|
| POST   | /api/auth/register | `{ name, email, password }`   | returns `{ token, user }` |
| POST   | /api/auth/login    | `{ email, password }`         | returns `{ token, user }` |
| GET    | /api/auth/me        | —                              | protected |

### Products
| Method | Route                      | Query params |
|--------|-----------------------------|--------------|
| GET    | /api/products               | `cat, search, minPrice, maxPrice, sort(priceAsc/priceDesc/rating/newest), page, limit` |
| GET    | /api/products/categories     | — |
| GET    | /api/products/:id            | — |

### Cart (protected — per logged-in user)
| Method | Route                | Body |
|--------|------------------------|------|
| GET    | /api/cart              | — |
| POST   | /api/cart              | `{ productId, qty, color, size }` |
| PUT    | /api/cart/:productId    | `{ qty, color, size }` (qty ≤ 0 removes item) |
| DELETE | /api/cart/:productId    | query `?color=&size=` |
| DELETE | /api/cart              | clears whole cart |

### Wishlist (protected)
| Method | Route                     | Notes |
|--------|-----------------------------|-------|
| GET    | /api/wishlist                | — |
| POST   | /api/wishlist/:productId     | toggles add/remove |

### Orders (protected)
| Method | Route              | Body |
|--------|----------------------|------|
| POST   | /api/orders           | `{ shippingAddress: {name,email,phone,address,city,state,pincode}, paymentMethod: 'cod'|'card'|'upi', coupon }` — builds order from the user's server-side cart, validates stock, decrements it, clears the cart |
| GET    | /api/orders            | current user's orders |
| GET    | /api/orders/:orderId   | single order by its human-readable orderId |

Coupons supported server-side: `WELCOME10` (10%), `NEXORA20` (20%), `FLAT5`
(₹400 flat). Free shipping over ₹999, otherwise ₹99 shipping.

## 5. Hooking up the existing front-end

The current `script.js` does everything client-side with `localStorage`. To
wire it to this API, the front-end needs to be updated to call these
endpoints with `fetch` instead of reading/writing `state.users`,
`state.cart`, `state.wishlist`, and `state.orders` directly, storing the JWT
(e.g. in `localStorage` as `nexora_token`) and sending it as a Bearer token
on cart/wishlist/order requests. I can do that front-end rewiring next if
you'd like — just say so.
