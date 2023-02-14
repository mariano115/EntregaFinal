const ProductService = require("./ProductsService");
const { loggerDeclaration } = require("../tools/utils");
const MyConnectionFactory = require("../DAOs/CartDao/CartFactoryDAO");
const cartDTO = require("../DTOs/CartDTO");
const connectionDbb = new MyConnectionFactory().returnDbConnection();
const logger = loggerDeclaration();

const getCarts = async () => {
  return await connectionDbb.getCarts();
};

const getCartById = async (id) => {
  return cartDTO(await connectionDbb.getCartById(id));
};

const addProductToCart = async (idProduct, idCart, cantidad) => {
  try {
    const productToAdd = await ProductService.getProductById(idProduct);
    return await connectionDbb.addProductToCart(idCart, productToAdd, cantidad);
  } catch (error) {
    logger.warn("Hubo un problema al agregar el producto al carrito");
    return error;
  }
};

const deleteCartById = async (id) => {
  return await connectionDbb.deleteCartById(id);
};

const createEmptyCart = async (email, address) => {
  return await connectionDbb.createEmptyCart(email, address);
};

const editCartById = async (id, cart) => {
  return await connectionDbb.editCartById(id, cart);
};

module.exports = {
  getCartById,
  addProductToCart,
  createEmptyCart,
  getCarts,
  deleteCartById,
  editCartById
};
