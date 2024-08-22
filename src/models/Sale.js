const saleSchema = new mongoose.Schema({
  produtoId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantidadeVendida: { type: Number, required: true },
  dataDaVenda: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Sale", saleSchema);
