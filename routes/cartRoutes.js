const express = require('express')
const router = express.Router();
const { createCart } = require('../controllers/CreateCart.js');
const { getCart } = require('../controllers/GetCart.js');
const { updateCart } = require('../controllers/UpdateCart.js');
const { deleteCart } = require('../controllers/DeleteCart.js');

router.post("/addProduct", createCart);
router.get("/getById/:id", getCart);
router.patch("/patch/:id", updateCart);
router.delete("/removeProduct/:id", deleteCart);

module.exports = router;