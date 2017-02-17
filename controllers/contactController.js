var Model = require('../model/models.js')
var moment = require('moment')

module.exports.show = function (req, res) {
    _findAllMessages(req, res)
}

module.exports.addMessage = function(req, res) {
    var newMessage = {
        message: req.body.message.substring(0, 500)
    }

    Model.Message.create(newMessage).then(_findAllMessages(req, res))
}

var _findAllMessages = function(req, res) {
    Model.Message.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(function(rows) {
        res.render('contact', {title: 'Express', messages: rows})
    }).catch(function(error) {
        console.log(error)
    })
}