const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    // legacyId keeps the original numeric id from the old front-end array,
    // handy for matching old links/bookmarks like #product?id=12
    legacyId: { type: Number, index: true },
    name: { type: String, required: true, trim: true },
    cat: { type: String, required: true, index: true },
    price: { type: Number, required: true },
    orig: { type: Number },
    rating: { type: Number, default: 4.5 },
    reviews: { type: Number, default: 0 },
    desc: { type: String, default: '' },
    img: { type: String, default: '' },
    img2: { type: String, default: '' },
    colors: [{ type: String }],
    sizes: [{ type: String }],
    stock: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

productSchema.index({ name: 'text', desc: 'text' });

module.exports = mongoose.model('Product', productSchema);
