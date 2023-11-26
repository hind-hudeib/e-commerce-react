const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    // You can set default status or enum values based on your application's needs
  },
  price: {
    type: Number,
    // You can add validations based on your requirements
  },
  shippingInfo: {
    phone: String,
    address: {
      street: String,
      city: String,
      postalCode: String,
      country: String,
    },
    shippingMethod: String,
    trackingInfo: String,
    estimatedDeliveryDate: Date,
    shippingCost: Number,
    courierInfo: {
      name: String,
      contact: String,
    },
    deliveryConfirmation: Boolean,
    insuranceDetails: String,
    taxCustomsInfo: String,
    deliveryStatus: String,
  },
});

const Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;
