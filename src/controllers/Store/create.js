const Store = require("../../models/Store")

module.exports = async (req, res) => {
    const data = req.body

    try{
        if(await Store.findOne(data.cnpj)){
            return res.send("Existing store")
        }

        const store = await Store.create(data)
        return res.send(store)

    }catch (error){
        return res.send({error, _:"Error creating store"})
    }
}