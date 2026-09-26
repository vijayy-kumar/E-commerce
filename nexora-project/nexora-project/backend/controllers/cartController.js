const User = require('../models/User');
const Product = require('../models/Product');

async function populatedCart(userId) {
  const user = await User.findById(userId).populate('cart.product');
  return user.cart
    .filter((i) => i.product) // drop items whose product was deleted
    .map((i) => ({
      product: i.product,
      qty: i.qty,
      color: i.color,
      size: i.size,
    }));
}

// @route GET /api/cart
async function getCart(req, res, next) {
  try {
    const cart = await populatedCart(req.user._id);
    res.json({ cart });
  } catch (err) {
    next(err);
  }
}

// @route POST /api/cart  { productId, qty, color, size }
async function addToCart(req, res, next) {
  try {
    const { productId, qty = 1, color = null, size = null } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const user = await User.findById(req.user._id);
    const existing = user.cart.find(
      (i) => i.product.toString() === productId && i.color === color && i.size === size
    );

    if (existing) {
      existing.qty += Number(qty);
    } else {
      user.cart.push({ product: productId, qty: Number(qty), color, size });
    }

    await user.save();
    res.status(201).json({ cart: await populatedCart(user._id) });
  } catch (err) {
    next(err);
  }
}

// @route PUT /api/cart/:productId  { qty, color, size }
async function updateCartItem(req, res, next) {
  try {
    const { productId } = req.params;
    const { qty, color = null, size = null } = req.body;

    const user = await User.findById(req.user._id);
    const item = user.cart.find(
      (i) => i.product.toString() === productId && i.color === color && i.size === size
    );
    if (!item) return res.status(404).json({ message: 'Item not in cart' });

    if (qty <= 0) {
      user.cart = user.cart.filter((i) => i !== item);
    } else {
      item.qty = qty;
    }

    await user.save();
    res.json({ cart: await populatedCart(user._id) });
  } catch (err) {
    next(err);
  }
}

// @route DELETE /api/cart/:productId?color=&size=
async function removeFromCart(req, res, next) {
  try {
    const { productId } = req.params;
    const { color = null, size = null } = req.query;

    const user = await User.findById(req.user._id);
    user.cart = user.cart.filter(
      (i) => !(i.product.toString() === productId && i.color === (color || null) && i.size === (size || null))
    );
    await user.save();
    res.json({ cart: await populatedCart(user._id) });
  } catch (err) {
    next(err);
  }
}

// @route DELETE /api/cart
async function clearCart(req, res, next) {
  try {
    const user = await User.findById(req.user._id);
    user.cart = [];
    await user.save();
    res.json({ cart: [] });
  } catch (err) {
    next(err);
  }
}

module.exports = { getCart, addToCart, updateCartItem, removeFromCart, clearCart };
