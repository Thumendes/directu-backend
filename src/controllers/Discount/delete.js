const Discount = require("../../models/Discount");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDiscount = await Discount.findbyIdandDelete(id);
    return res.send(deletedDiscount)
  } catch (err) {
      return res.send({err, _:"Error deleting discount"})
  }
};
