const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
	items: { type: Array, required: true },
	numberOrder: { type: Number, required: true},
	date: { type: Date, required: true },
	state: { type: String, required: true },
	email: { type: String, required: true }
});
module.exports = model("ordenes", OrderSchema)
