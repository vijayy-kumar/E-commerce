const crypto = require('crypto');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');

const COUPONS = {
  WELCOME10: { type: 'pct', value: 10 },
  NEXORA20: { type: 'pct', value: 20 },
  FLAT5: { type: 'flat', value: 400 },
};
const FREE_SHIPPING_THRESHOLD = 999;
const SHIPPING_FEE = 99;

function generateOrderId() {
  return 'NX' + Date.now().toString(36).toUpperCase() + crypto.randomBytes(2).toString('hex').toUpperCase();
}

// @route POST /api/orders  { shippingAddress, paymentMethod, coupon }
// Builds the order from the user's current cart (server-side, not client-trusted totals)
async function createOrder(req, res, next) {
  try {
    const { shippingAddress, paymentMethod = 'cod', coupon } = req.body;

    if (!shippingAddress || !shippingAddress.name || !shippingAddress.address) {
      return res.status(400).json({ message: 'Shipping address is required' });
    }

    const user = await User.findById(req.user._id).populate('cart.product');
    if (!user.cart.length) {
      return res.status(400).json({ message: 'Your cart is empty' });
    }

    let subtotal = 0;
    const items = [];

    for (const line of user.cart) {
      const product = line.product;
      if (!product) continue;
      if (product.stock < line.qty) {
        return res.status(400).json({ message: `${product.name} only has ${product.stock} left in stock` });
      }
      subtotal += product.price * line.qty;
      items.push({
        product: product._id,
        name: product.name,
        qty: line.qty,
        price: product.price,
        color: line.color,
        size: line.size,
      });
    }

    let discount = 0;
    const code = (coupon || '').toUpperCase().trim();
    if (code && COUPONS[code]) {
      const c = COUPONS[code];
      discount = c.type === 'pct' ? Math.round((subtotal * c.value) / 100) : c.value;
      discount = Math.min(discount, subtotal);
    } else if (code) {
      return res.status(400).json({ message: 'Invalid coupon code' });
    }

    const shippingFee = subtotal - discount >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    const total = subtotal - discount + shippingFee;

    // Decrement stock
    for (const line of user.cart) {
      if (!line.product) continue;
      await Product.updateOne({ _id: line.product._id }, { $inc: { stock: -line.qty } });
    }

    const order = await Order.create({
      orderId: generateOrderId(),
      user: user._id,
      items,
      shippingAddress,
      paymentMethod,
      coupon: code || null,
      subtotal,
      discount,
      shippingFee,
      total,
    });

    user.cart = [];
    await user.save();

    res.status(201).json({ order });
  } catch (err) {
    next(err);
  }
}

// @route GET /api/orders  (current user's own orders)
async function getMyOrders(req, res, next) {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({ orders });
  } catch (err) {
    next(err);
  }
}

// @route GET /api/orders/:orderId
async function getOrderById(req, res, next) {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId, user: req.user._id });
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json({ order });
  } catch (err) {
    next(err);
  }
}

module.exports = { createOrder, getMyOrders, getOrderById };
