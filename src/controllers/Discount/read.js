const Discount = require("../../models/Discount");

module.exports = async (req, res) => {
  try {
    const discounts = await Discount.find()
    return res.send(discounts)
  } catch (error) {
      return res.send({error, _:"Error listing discounts"})
  }
};
