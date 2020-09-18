const Shopkeeper = require("../../models/Shopkeeper")

module.exports = async (req, res) => {
    const data = req.body
    
    try{

        const shopkeeper = await Shopkeeper.create(data)
        return res.send(shopkeeper)

    }catch (error){
        return res.send({error, _:"Error creating shopkeeper"})
    }
}