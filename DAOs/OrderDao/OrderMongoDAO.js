const OrderModel = require("../../models/Order.model");
const { loggerDeclaration } = require("../../tools/utils");
const logger = loggerDeclaration();

module.exports = class OrderMongoDb {
  constructor() {}

  async createOrder(items, email) {
    try {
      return await OrderModel.create({
        items,
        date: new Date().toISOString(),
        state: "generada",
        email,
      });
    } catch (error) {
      logger.warn(error);
      return { error: "error in creating cart" };
    }
  }

  static returnSingleton() {
    if (!this.instance) {
      this.instance = new OrderMongoDb();
    }
    return this.instance;
  }
};
