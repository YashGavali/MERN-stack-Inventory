const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter product name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please enter description'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter price'],
    maxLength: [6, 'Price cannot exceed 6 chars'],
  },
  images: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  Stock: {
    type: Number,
    required: [true, 'Please enter stock '],
    maxLength: [4, 'Stock cannot exceed 4 chars'],
    default: 1,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);
