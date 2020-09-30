const { Router } = require("express");
const ClientController = require("./controllers/Client");
const StoreController = require("./controllers/Store");
const DiscountController = require("./controllers/Discount");
const FormController = require("./controllers/Form");

const routes = Router();

// Rotas para client
routes.get("/client", ClientController.read);
routes.post("/client", ClientController.create);
routes.put("/client", ClientController.update);
routes.delete("/client", ClientController.destroy);

// Rotas para client
routes.get("/store", StoreController.read);
routes.post("/store", StoreController.create);
routes.put("/store", StoreController.update);
routes.delete("/store", StoreController.destroy);

// Rotas para client
routes.get("/discount", DiscountController.read);
routes.post("/discount", DiscountController.create);
routes.put("/discount", DiscountController.update);
routes.delete("/discount", DiscountController.destroy);

// Rotas para form
routes.get("/form", FormController.read);
routes.post("/form", FormController.create);
routes.put("/form", FormController.update);
routes.delete("/form", FormController.destroy);

module.exports = routes;
