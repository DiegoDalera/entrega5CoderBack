import mongoose from "mongoose";

const productCollection = "products";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // Cambiado de "require" a "required"
  },
  description: {
    type: String,
    required: true,  // Cambiado de "require" a "required"
  },
  thumbnail: {
    type: Array,
    default: [],
  },
  code: {
    type: String,
    required: true,  // Cambiado de "require" a "required"
  },
  stock: {
    type: Number,
    required: true,  // Cambiado de "require" a "required"
  },
  status: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
    required: true,  // Cambiado de "require" a "required"
  },
});

export const productModel = mongoose.model(productCollection, productSchema);

