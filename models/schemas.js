const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    id: {type:String},
    users: [{
        code: {type:String},
        name: {type:String},
    }]
})

const imagesSchema = new mongoose.Schema({
    id:{type:String,},
    url: [{type:String}],
})

const userConversationsSchema = new mongoose.Schema({
    id: {type:String},
    userId: {type:String},
    callerId: {type:String},
    callersName: {type:String},
    messages: {type:Object},
    messageId: {type:String},
})

const Users = mongoose.model('Users', userSchema, 'users') //creates Users that can used in project, using the schema for that and users is the database
const Images = mongoose.model('Images', imagesSchema, 'images_url') // same thing
const userConversations = mongoose.model('userConversations', userConversationsSchema, 'userConversations')
const mySchemas = {'Users':Users, 'Images':Images, 'userConversation':userConversations}

module.exports = mySchemas