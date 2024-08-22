const Sale = require("../models/Sale");
const Product = require("../models/Product");

exports.createSale = async (req, res) => {
  try {
    const { produtoId, quantidadeVendida } = req.body;
    const product = await Product.findById(produtoId);

    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    if (product.quantidadeEmEstoque < quantidadeVendida) {
      return res.status(400).json({ error: "Estoque insuficiente" });
    }

    const sale = new Sale(req.body);
    await sale.save();

    product.quantidadeEmEstoque -= quantidadeVendida;
    await product.save();

    res.status(201).json(sale);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find().populate("produtoId");
    res.status(200).json(sales);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
