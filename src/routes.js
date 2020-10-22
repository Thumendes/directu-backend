const { Router } = require("express");
const ClientController = require("./controllers/Client");
const StoreController = require("./controllers/Store");
const DiscountController = require("./controllers/Discount");
const FormController = require("./controllers/Form");
const Shopkeeper = require("./controllers/Shopkeeper")
const Auth = require("./controllers/Auth")

const routes = Router();

// Rotas para client
routes.get("/client", ClientController.read);
routes.post("/client", ClientController.create);
routes.put("/client/:id", ClientController.update);
routes.delete("/client/:id", ClientController.destroy);
routes.get("/client/:id", ClientController.unic);

// Rotas para client
routes.get("/store", StoreController.read);
routes.post("/store", StoreController.create);
routes.put("/store/:id", StoreController.update);
routes.delete("/store/:id", StoreController.destroy);

// Rotas para client
routes.get("/discount", DiscountController.read);
routes.post("/discount", DiscountController.create);
routes.put("/discount/:id", DiscountController.update);
routes.delete("/discount/:id", DiscountController.destroy);

// Rotas para form
routes.get("/form", FormController.read);
routes.post("/form", FormController.create);
routes.put("/form/:id", FormController.update);
routes.delete("/form/:id", FormController.destroy);
routes.get("/form/:id", FormController.unic);

// Rotas para shopkeeper
routes.get("/shopkeeper", Shopkeeper.read);
routes.post("/shopkeeper", Shopkeeper.create);
routes.put("/shopkeeper/:id", Shopkeeper.update);
routes.delete("/shopkeeper/:id", Shopkeeper.destroy);


//rota para autenticaçao
routes.post("/auth", Auth)


module.exports = routes;
