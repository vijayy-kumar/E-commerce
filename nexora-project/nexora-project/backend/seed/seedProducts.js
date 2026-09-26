// Populates MongoDB with the product catalog that used to live inline in
// script.js (the PRODUCTS array). Run with: npm run seed
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Product = require('../models/Product');

async function seed() {
  await connectDB();

  const raw = fs.readFileSync(path.join(__dirname, 'products.json'), 'utf8');
  const products = JSON.parse(raw);

  const docs = products.map((p) => ({
    legacyId: p.id,
    name: p.name,
    cat: p.cat,
    price: p.price,
    orig: p.orig,
    rating: p.rating,
    reviews: p.reviews,
    desc: p.desc,
    img: p.img,
    img2: p.img2,
    colors: p.colors || [],
    sizes: p.sizes || [],
    stock: p.stock,
  }));

  await Product.deleteMany({});
  await Product.insertMany(docs);

  console.log(`Seeded ${docs.length} products.`);
  await mongoose.connection.close();
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
