<div align="center">

# ✦ Nexora

### Full-Stack E-Commerce Website

A clean, responsive e-commerce platform with a real backend — authentication, cart, wishlist, orders, and coupons — built for a smooth end-to-end shopping experience.

[![Website](https://img.shields.io/badge/Live-Demo-6C63FF?style=for-the-badge&logo=vercel&logoColor=white)](https://nexoraa-in.netlify.app/)
[![GitHub](https://img.shields.io/badge/-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vijayy-kumar)

</div>

---

## ◈ Overview

**Nexora** is a full-stack e-commerce web app: a lightweight vanilla HTML/CSS/JS storefront on the front end, backed by a **Node.js + Express + MongoDB** API for authentication, cart, wishlist, and orders — with JWT-based auth and coupon support.

---

## ⚡ Features

<table>
<tr>
<td width="50%">

- 🔐 User authentication (JWT + bcrypt)
- 🛍️ Product catalog with search & filters
- 🛒 Persistent, per-user shopping cart
- ❤️ Wishlist (add/remove toggle)
- 📦 Order placement & order history

</td>
<td width="50%">

- 🏷️ Coupon codes (`WELCOME10`, `NEXORA20`, `FLAT5`)
- 🚚 Free shipping over ₹999, ₹99 flat otherwise
- 📱 Fully responsive design
- 🛡️ Rate-limited auth routes
- ⚡ Clean, dependency-light frontend

</td>
</tr>
</table>

---

## 🛠 Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

</div>

| Layer | Technology | Purpose |
|:--|:--|:--|
| Frontend | **HTML5 / CSS3 / JavaScript** | Storefront UI & interactivity |
| Backend | **Node.js + Express** | REST API server |
| Database | **MongoDB (Mongoose)** | Users, products, cart, orders |
| Auth | **JWT + bcrypt** | Token-based auth & password hashing |
| Security | **express-rate-limit, cors** | Brute-force protection & CORS control |

---

## 📂 Project Structure

```
nexora-project/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── backend/
    ├── server.js
    ├── package.json
    ├── .env.example
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── authController.js
    │   ├── cartController.js
    │   ├── orderController.js
    │   ├── productController.js
    │   └── wishlistController.js
    ├── middleware/
    │   ├── auth.js
    │   └── errorHandler.js
    ├── models/
    │   ├── User.js
    │   ├── Product.js
    │   └── Order.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── cartRoutes.js
    │   ├── orderRoutes.js
    │   ├── productRoutes.js
    │   └── wishlistRoutes.js
    └── seed/
        ├── products.json
        └── seedProducts.js
```

---

## 🚀 Getting Started

### 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env
# edit .env — set MONGO_URI and a strong JWT_SECRET

npm run seed   # loads the product catalog into MongoDB
npm run dev    # starts the API on http://localhost:5000
```

### 2. Frontend setup

```bash
cd frontend
# open index.html directly, or serve it with any static server
```

Health check: `GET /api/health`

---

## 🔌 API Reference

### Auth
| Method | Route | Body | Notes |
|:--|:--|:--|:--|
| POST | `/api/auth/register` | `{ name, email, password }` | returns `{ token, user }` |
| POST | `/api/auth/login` | `{ email, password }` | returns `{ token, user }` |
| GET | `/api/auth/me` | — | protected |

### Products
| Method | Route | Query params |
|:--|:--|:--|
| GET | `/api/products` | `cat, search, minPrice, maxPrice, sort, page, limit` |
| GET | `/api/products/categories` | — |
| GET | `/api/products/:id` | — |

### Cart / Wishlist / Orders *(protected)*
| Method | Route | Notes |
|:--|:--|:--|
| GET/POST/PUT/DELETE | `/api/cart` | manage the logged-in user's cart |
| GET/POST | `/api/wishlist` | toggle add/remove |
| POST/GET | `/api/orders` | place an order, view order history |

All protected routes require `Authorization: Bearer <token>`.

---

## 🌐 Explore

<div align="center">

[**🔗 View Live Demo**](https://nexoraa-in.netlify.app/) &nbsp;|&nbsp; [**💻 View Source Code**](https://github.com/vijayy-kumar/E-commerce)

</div>

---

## ◈ Connect

<div align="center">

[![GitHub](https://img.shields.io/badge/-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/vijayy-kumar)
[![LinkedIn](https://img.shields.io/badge/-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thevijaykumar)
[![Gmail](https://img.shields.io/badge/-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:imvksdr@gmail.com)

</div>

---

<div align="center">

Designed & Developed with curiosity and code ✨

**© 2026 Vijay Kumar. All Rights Reserved.**

</div>
