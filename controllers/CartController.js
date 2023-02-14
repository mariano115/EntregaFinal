const cartModel = require("../models/Cart.model");
const cartService = require("../service/CartService");

const getCarts = async (req, res) => {
  res.send(await cartService.getCarts());
};

const getCartById = async (req, res) => {
  res.send(await cartService.getCartById(req.params.id));
};

const addProductToCart = async (req, res) => {
  res.send(await cartService.addProductToCart(
    req.body.idProducto,
    req.body.idCarrito,
    req.body.cantidad
  ))
};

const deleteCartById = async (req, res) => {
  res.send(await cartService.deleteCartById(req.params.id))
}

const createEmptyCart = async (email, address) => {
  return await cartModel.create({
    email,
    date: new Date().toISOString(),
    items: [],
    address,
  });
};

const editCartById = async (req, res) => {
  res.send(await cartService.editCartById(req.params.id, req.body));
};

module.exports = {
  deleteCartById,
  getCartById,
  addProductToCart,
  createEmptyCart,
  getCarts,
  editCartById
};
