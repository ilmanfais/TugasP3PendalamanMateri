// Import express 
const express = require("express");
// Membuat object express 
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());
/**
* Membuat routing.
* Method get menerima 2 params.
* Param 1 adalah endpoint.
* Param 2 callback.
* Callback menerima object req dan res
*/
// Mendefinisikan route
const router = require("./routes/api");
app.use(router);

// Mendefinisikan port. 
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});