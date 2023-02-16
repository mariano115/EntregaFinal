const { createHash, getDataUser } = require("../tools/utils");
const UserService = require("./UserService");
const { getCartById } = require("./CartService");
const enviarMail = require("../tools/mails");
const { generateOrder, generatePurchaseSummary } = require("./OrderService");

const register = async (newUser) => {
  try {
    const hashPassword = createHash(newUser.password);
    newUser.password = hashPassword;
    if (await UserService.createUser(newUser)) {
      return "Usuario Creado";
    } else {
      return "No se pudo crear el usuario";
    }
  } catch (error) {
    return "Hubo un problema al crear el usuario";
  }
};

const finishBuy = async (carrito) => {
  try {
    const cart = await getCartById(carrito.idCarrito);
    const user = await getDataUser(cart.email);
    const order = await generateOrder(cart, user);
    const itemsTextList = await generatePurchaseSummary(order.items);
    enviarMail(
      cart.email,
      "nuevo pedido de " + user.name + " " + user.email,
      itemsTextList
    );
    return "El pedido fue confirmado";
  } catch (error) {
    return error;
  }
};

module.exports = { register, finishBuy };
