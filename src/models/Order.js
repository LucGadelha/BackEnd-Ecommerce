const orderSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  produtos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }],
  dataDoPedido: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
