const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController')


routes.get("/products", ProductController.index);       //rota perquisa
routes.get('/products/:id', ProductController.show);    //rota perquisa id
routes.post('/products', ProductController.store);      //rota insersao
routes.put('/products/:id', ProductController.update); //rota atualizacao
routes.delete('/products/:id', ProductController.destroy); //rota atualizacao

module.exports = routes; 