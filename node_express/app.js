// const http = require("http");

const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
// app.use("/", (req, res, next) => {
// 	console.log("This always runs!");
// 	next();
// });

// app.use("/add-product", (req, res, next) => {
// 	console.log("In the middleware!");
// 	res.send(
// 		'<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button</form>'
// 	);
// 	//res.send('<h1>The "Add Product" Page</h1>');
// 	//next(); //Allows the request to continue to the next middleware in line
// });

// app.use("/product", (req, res, next) => {
// 	console.log(req.body);
// 	res.redirect("/");
// });

// app.get("/product", (req, res, next) => {
// 	console.log(req.body);
// 	res.redirect("/");
// });

// app.put("/product", (req, res, next) => {
// 	console.log(req.body);
// 	res.redirect("/");
// });

// app.post("/product", (req, res, next) => {
// 	console.log(req.body);
// 	res.redirect("/");
// });

app.use("/admin", adminRoutes);

app.use(shopRoutes);

// app.use("/", (req, res, next) => {
// 	console.log("In another middleware!");
// 	res.send("<h1>Hello from Express</h1>");
// });

// const server = http.createServer(app);

// server.listen(3000);

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
