const ProductService = require("./ProductsService");
const { loggerDeclaration } = require("../tools/utils");
const MyConnectionFactory = require("../DAOs/CartDao/CartFactoryDAO");
const cartDTO = require("../DTOs/CartDTO");
const connectionDbb = new MyConnectionFactory().returnDbConnection();
const logger = loggerDeclaration();

const getCarts = async () => {
  return await connectionDbb.getCarts();
};

const generateOrder = async (cart, user) => {
  console.log('cart',cart)
  console.log('user',user)
  try {
    const itemsList = cart.items
      .map((item) => {
        return `Producto: ${item.product.description} Cantidad ${
          item.quantity
        } Categoria ${item.product.category} Precio C/U ${item.product.price}
        Photo ${item.product.photo} Total: ${
          item.product.price * item.quantity
        } <br> `;
      })
      .join("");
    //return await connectionDbb.addProduct(product);
  } catch (error) {
    logger.warn("No se pudo crear el resumen de productos");
    return error;
  }
};

module.exports = {
  generateOrder
};
