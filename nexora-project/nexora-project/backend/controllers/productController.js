const Product = require('../models/Product');

// @route GET /api/products
// Supports: ?cat=Electronics&search=earbuds&minPrice=100&maxPrice=5000
//           &sort=priceAsc|priceDesc|rating|newest&page=1&limit=12
async function getProducts(req, res, next) {
  try {
    const { cat, search, minPrice, maxPrice, sort, page = 1, limit = 24 } = req.query;

    const filter = {};
    if (cat && cat !== 'All') filter.cat = cat;
    if (search) filter.$text = { $search: search };
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    let sortBy = { createdAt: -1 };
    if (sort === 'priceAsc') sortBy = { price: 1 };
    if (sort === 'priceDesc') sortBy = { price: -1 };
    if (sort === 'rating') sortBy = { rating: -1 };
    if (sort === 'newest') sortBy = { createdAt: -1 };

    const pageNum = Math.max(1, Number(page));
    const limitNum = Math.min(60, Math.max(1, Number(limit)));

    const [items, total] = await Promise.all([
      Product.find(filter)
        .sort(sortBy)
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum),
      Product.countDocuments(filter),
    ]);

    res.json({
      products: items,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
    });
  } catch (err) {
    next(err);
  }
}

// @route GET /api/products/categories
async function getCategories(req, res, next) {
  try {
    const cats = await Product.distinct('cat');
    res.json({ categories: cats });
  } catch (err) {
    next(err);
  }
}

// @route GET /api/products/:id
async function getProductById(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ product });
  } catch (err) {
    next(err);
  }
}

module.exports = { getProducts, getCategories, getProductById };
