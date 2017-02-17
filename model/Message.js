var Sequelize = require('sequelize')

var attributes = {
    message: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

var options = {
    freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options