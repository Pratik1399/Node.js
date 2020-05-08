const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-products => GET
router.get("/add-product", (req, res, next) => {
	console.log("In the middleware!");
	// res.send(
	// 	'<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button</form>'
	// );
	//res.send('<h1>The "Add Product" Page</h1>');
	//next(); //Allows the request to continue to the next middleware in line
	res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

module.exports = router;
