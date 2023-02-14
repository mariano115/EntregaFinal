const mongoose= require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);


const OrderSchema = new mongoose.Schema({
	items: { type: Array, required: true },
	numberOrder: { type: Number },
	date: { type: Date, required: true },
	state: { type: String, required: true },
	email: { type: String, required: true }
});

OrderSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'numberOrder'});
module.exports = mongoose.model("ordenes", OrderSchema)
