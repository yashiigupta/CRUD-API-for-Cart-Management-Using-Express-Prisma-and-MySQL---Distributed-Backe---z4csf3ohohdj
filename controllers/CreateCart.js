const { PrismaClient } = require('@prisma/client');
const primsa = new PrismaClient();

async function createCart(req, res) {
  try {
    const { userId, productId, count } = req.body;

    // missing fields
    if(!userId || !productId || !count) {
      return res.status(404).json({
        "error": "All fields required"
      })
    };
    
    // create the cart entry
    const create = await primsa.cart.create({
      data: req.body,
    });
    return res.status(201).json(create);
  }
  catch(err) {
    console.log(err);
    return res.status(500).json({
      "error": "Internal server error"
    })
  }
}

module.exports = { createCart };