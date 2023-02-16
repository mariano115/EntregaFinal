const { loggerDeclaration } = require("../tools/utils");
const MyConnectionFactory = require("../DAOs/OrderDao/OrderFactoryDAO");
const connectionDbb = new MyConnectionFactory().returnDbConnection();
const logger = loggerDeclaration();

const generateOrder = async (cart) => {
  try {
    return await connectionDbb.createOrder(cart.items, cart.email);
  } catch (error) {
    logger.warn("No se pudo crear el resumen de productos");
    return error;
  }
};

const generatePurchaseSummary = async (items) => {
  try {
    const itemsTextList = items
      .map((item) => {
        return `Producto: ${item.product.description} Cantidad ${
          item.quantity
        } Categoria ${item.product.category} Precio C/U ${item.product.price}
        Photo ${item.product.photo} Total: ${
          item.product.price * item.quantity
        } <br> `;
      })
      .join("");
    return itemsTextList;
  } catch (error) {
    logger.warn("No se pudo crear el resumen de productos");
    return error;
  }
};

module.exports = {
  generateOrder,
  generatePurchaseSummary,
};
