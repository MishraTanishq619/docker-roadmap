const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Set up mongoose connection
mongoose.connect("mongodb://mongo_db/db2", {});

const EntrySchema = new mongoose.Schema({
	text: String,
	date: { type: Date, default: Date.now },
});

const Entry = mongoose.model("Entry", EntrySchema);

app.get("/", async (req, res) => {
	res.send("Hello World!.");
});

app.get("/one", async (req, res) => {
	try {
		const entry = new Entry({ text: "This is an entry by harkirat" });
		await entry.save();
		res.send("Entry added!");
	} catch (err) {
		res.status(500).send("Error occurred");
	}
});

app.get("/two", async (req, res) => {
	try {
		const entry = new Entry({ text: "This is by tarzan" });
		await entry.save();
		res.send("Entry added!");
	} catch (err) {
		res.status(500).send("Error occurred");
	}
});

app.get("/three", async (req, res) => {
	try {
		const entry = new Entry({ text: "This is  harkirat" });
		await entry.save();
		res.send("Entry added!");
	} catch (err) {
		res.status(500).send("Error occurred");
	}
});

app.get("/four", async (req, res) => {
	try {
		const entry = new Entry({ text: "Hello world." });
		await entry.save();
		res.send("Entry added!");
	} catch (err) {
		res.status(500).send("Error occurred");
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
