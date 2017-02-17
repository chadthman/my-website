var Message = require('./Message.js'),
    connection = require('../sequelize.js')

var models = {}

models.Message = connection.define('messages', Message.attributes, Message.options)

connection.sync()


module.exports = models
