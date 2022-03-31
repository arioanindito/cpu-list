const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Item = require("./models/Item");
const { json } = require("express");

// DB Configuration //
// mongoose.connect("mongodb://127.0.0.1:27017/cpuDB", { useNewUrlParser: true });
mongoose.connect(
	"mongodb+srv://admin-ario:admin@cluster0.bjf8s.mongodb.net/cpuDB"
);

mongoose.connection.once("open", () => {
	console.log("MongoDB Connect Successfully");
});

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	Item.find((err, items) => {
		if (err) {
			console.log(err);
		} else {
			res.json(items);
		}
	});
});

app.post("/create", (req, res) => {
	const item = new Item(req.body);
	item
		.save()
		.then((item) => {
			res.json(item);
		})
		.catch((err) => {
			res.status(500).send(err.message);
		});
});

app.get("/:id", (req, res) => {
	const id = req.params.id;
	Item.findById(id, (err, item) => {
		res.json(item);
	});
});

app.post("/:id", (req, res) => {
	const id = req.params.id;
	Item.findById(id, (err, item) => {
		if (!item) {
			res.status(404).send("Data not found");
		} else {
			item.brand = req.body.brand;
			item.model = req.body.model;
			item.socket = req.body.socket;
			item.clockspeed = req.body.clockspeed;
			item.core = req.body.core;
			item.threads = req.body.threads;
			item.tdp = req.body.tdp;
			item.price = req.body.price;

			item
				.save()
				.then((item) => {
					res.json(item);
				})
				.catch((err) => {
					res.status(500).send(err.message);
				});
		}
	});
});

app.listen(PORT, () => {
	console.log("Server is running on port " + PORT);
});
