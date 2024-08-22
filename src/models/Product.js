const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  preco: { type: Number, required: true },
  quantidadeEmEstoque: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
