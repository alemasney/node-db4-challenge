const express = require('express');
const helmet = require('helmet');

const db = require('./data/models.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await db.getRecipes();

        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json(error);
    }
})

server.get('/api/recipes/:id/shoppinglist', async (req, res) => {
    const {id} = req.params;

    try {
        const shoppingList = await db.getShoppingList(id);

        res.status(200).json(shoppingList);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = server;