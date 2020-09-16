const { Model, Schema } = require("../database")

const DiscountsSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    value:{
        type: Number,
        required: true
    },
    storeId:{
        type: Schema.Types.ObjectId,
        required: true
    },
    storeName:{
        type: String,
        required: true
    }
})

module.exports = new Model("Discounts", DiscountsSchema)