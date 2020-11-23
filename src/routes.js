const { Router } = require("express");
const ClientController = require("./controllers/Client");
const StoreController = require("./controllers/Store");
const FormController = require("./controllers/Form");
const AnswerController = require("./controllers/Answer");
const Auth = require("./controllers/Auth");

const routes = Router();

// Rotas para client
routes.get("/client", ClientController.read);
routes.get("/client/:id", ClientController.unic);
routes.post("/client", ClientController.create);
routes.put("/client/:id", ClientController.update);
routes.delete("/client/:id", ClientController.destroy);

// Rotas para Store
routes.get("/store", StoreController.read);
routes.get("/store/:id", StoreController.find);
routes.post("/store", StoreController.create);
routes.put("/store/:id", StoreController.update);
routes.delete("/store/:id", StoreController.destroy);

// Rotas para form
routes.get("/form", FormController.read);
routes.post("/form", FormController.create);
routes.put("/form/:id", FormController.update);
routes.delete("/form/:id", FormController.destroy);
routes.get("/form/:id", FormController.unic);

// Rotas para Answer
routes.get("/answer", AnswerController.read);
routes.get("/answer/:id", AnswerController.find);
routes.post("/answer", AnswerController.create);
routes.delete("/answer/:id", AnswerController.destroy);

//rota para autenticaçao
routes.post("/authclient", Auth.Client);
routes.post("/authadmin", Auth.Admin);

//rota de cadastro
routes.post("/auth/signUp", Auth.SignUp)

module.exports = routes;
