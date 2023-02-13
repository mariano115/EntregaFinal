const orderModel = require("../../models/Order.model");
const { loggerDeclaration } = require("../../tools/utils");
const logger = loggerDeclaration();

module.exports = class OrderMongoDb {
  constructor() {}

  async find() {
    return await orderModel.find();
  }

  async getProductById(id) {
    try {
      return await orderModel.findById(id);
    } catch (error) {
      logger.warn("error in get product method getProductById", error);
      throw new Error('error in get product');
    }
  }

  static returnSingleton() {
    if (!this.instance) {
      this.instance = new ProductMongoDb();
    }
    return this.instance;
  }
};
