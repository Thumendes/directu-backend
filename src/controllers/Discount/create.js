const Discount = require("../../models/Discount")

module.exports = async (req, res) => {
    const data = req.body

    try{
        const discount = await Discount.create(data)
        return res.send(discount)

    }catch (error){
        return res.send({error, _:"Error creating discount"})
    }
}