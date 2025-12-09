const express = require('express');
const router = express.Router();
const mySchemas = require('../models/schemas.js');
const { url } = require('inspector');

router.get('/homescreen-data', async (req, res) => {  
        const images = mySchemas.Images

        const imagesData = await images.find({}).exec()
        if (imagesData) {
            res.send(JSON.stringify(imagesData)) 
        }
});

router.get('/login-data', async (req, res) => {  
        const users = mySchemas.Users

        const userData = await users.find({}, { _id: 0 }).exec()
        if (userData) {
            res.send(JSON.stringify(userData))
        }
});

router.get('/userConversations', async (req, res) => {
    const userConversations = mySchemas.userConversation

    const userConversation = await userConversations.find({}).exec()
    if (userConversation) {
        res.send(JSON.stringify(userConversation))
    }
})

module.exports = router;
