const mongoose = require("mongoose");
const Item = mongoose.Schema({
	brand: {
		type: String,
	},
	model: {
		type: String,
	},
	socket: {
		type: String,
	},
	clockspeed: {
		type: Number,
	},
	core: {
		type: String,
	},
	threads: {
		type: Number,
	},
	tdp: {
		type: Number,
	},
	price: {
		type: Number,
	},
});

module.exports = mongoose.model("Item", Item);
