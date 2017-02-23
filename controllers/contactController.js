var Model = require('../model/models.js')
var moment = require('moment')

module.exports.show = function (req, res) {
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

module.exports.addMessage = function(req, res) {
    var newMessage = {
        message: req.body.message.substring(0, 500)
    }

    Model.Message.create(newMessage).then(function() {
        Model.Message.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(function(rows) {
            res.send({success: true, messages: rows})
        }).catch(function(error) {
            res.send({success: false, message: error})
        })
    })
}