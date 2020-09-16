const Discount = require("../../models/Discount");

module.exports = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  try {
    const updatedDiscount = await Discount.findbyIdandUpdate(id, data);
    return res.send(updatedDiscount)
  } catch (err) {
      return res.send({err, _:"Error updating discount"})
  }

};
