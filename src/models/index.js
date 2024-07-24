

module.exports = () => {
    const Note = require("./Note");
    const User = require("./User");


    Note.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
    });

    
    User.hasMany(Note, {
        foreignKey: 'userId',
        as: 'notes'
    });
}