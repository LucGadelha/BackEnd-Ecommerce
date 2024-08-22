const Order = require("../models/Order");

// Criar um novo pedido
exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obter todos os pedidos
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("clienteId produtos");
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obter um pedido por ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("clienteId produtos");
    if (!order) {
      return res.status(404).json({ error: "Pedido não encontrado" });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Atualizar um pedido
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate(
      "clienteId produtos"
    );
    if (!order) {
      return res.status(404).json({ error: "Pedido não encontrado" });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Excluir um pedido
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Pedido não encontrado" });
    }
    res.status(200).json({ message: "Pedido excluído com sucesso" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
