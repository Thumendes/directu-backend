const Shopkeeper = require('../../models/Shopkeeper')

module.exports = async (req, res) => {
    const {email, password} = req.body
    
    try{
        const shopkeeper = await Shopkeeper.findOne({email})
        console.log(client)
        if(!shopkeeper){
            return res.status(400).json({error: "Email errado"})
        }

        if(shopkeeper.password !== password){
            return res.status(400).json({error: "Senha incorreta"})
        }

        return res.json({token: Date.now(), shopkeeper})

    } catch(err){
        return res.status(400)
    }

}