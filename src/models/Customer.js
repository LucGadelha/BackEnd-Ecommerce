const customerSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String },
});

module.exports = mongoose.model("Customer", customerSchema);
