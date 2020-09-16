const { Model, Schema } = require('../database')

const StoreSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    cnpj:{
        type: String,
        required: true
    },
    imageURL:{
        type: String,
        required: true,
        default: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
    },
    numClients:{
        type: Number,
        required: true
    },
    storeName:{
        type: String,
        required: true
    }
})

module.exports = new Model("Store", StoreSchema)