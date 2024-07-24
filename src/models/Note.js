const { DataTypes } = require("sequelize")
const { sequelize } = require("../db");

const Note = sequelize.define('Note', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // userId: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     references: {
    //         model: "User",
    //         key: "id"
    //     }
    // }
});




// Note.sync();

module.exports = Note;