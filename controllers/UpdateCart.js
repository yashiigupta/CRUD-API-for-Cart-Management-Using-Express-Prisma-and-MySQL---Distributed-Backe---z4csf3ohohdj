const { PrismaClient } = require('@prisma/client');
const primsa = new PrismaClient();

async function updateCart(req, res) {
  try {
    const { id } = req.params;

    // check if cart entry is present in the cart
    const isThere = await primsa.cart.findUnique({
      where: {
        cartId: Number(id)
      },
    });
    
    // if no cart is found
    if(!isThere) {
      return res.status(404).json({
        "error": "Cart not found"
      })
    };
    
    // send the cart entry
    const updatedCart = await primsa.cart.update({
      where: {
        cartId: Number(id)
      },
      data: req.body
    });
    return res.status(200).json(updatedCart);
  }
  catch(err) {
    console.log(err);
    return res.status(500).json({
      "error": "Internal server error"
    })
  }
}

module.exports = { updateCart };