const OrderMongo = require("./OrderMongoDAO");

module.exports = class MyConnectionFactory {
  returnDbConnection() {
    if (process.env.STORE == "MONGO") return OrderMongo.returnSingleton();
  }
};
