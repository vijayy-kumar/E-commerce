const User = require('../models/User');
const Product = require('../models/Product');

// @route GET /api/wishlist
async function getWishlist(req, res, next) {
  try {
    const user = await User.findById(req.user._id).populate('wishlist');
    res.json({ wishlist: user.wishlist });
  } catch (err) {
    next(err);
  }
}

// @route POST /api/wishlist/:productId  (toggles add/remove)
async function toggleWishlist(req, res, next) {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const user = await User.findById(req.user._id);
    const idx = user.wishlist.findIndex((id) => id.toString() === productId);
    let action;

    if (idx > -1) {
      user.wishlist.splice(idx, 1);
      action = 'removed';
    } else {
      user.wishlist.push(productId);
      action = 'added';
    }

    await user.save();
    const populated = await User.findById(user._id).populate('wishlist');
    res.json({ action, wishlist: populated.wishlist });
  } catch (err) {
    next(err);
  }
}

module.exports = { getWishlist, toggleWishlist };
