

module.exports = () => {
    const Note = require("./Note");
    const User = require("./User");


    User.hasMany(Note, { foreignKey: 'userId',  as: 'notes', onDelete: "CASCADE" });
    
    Note.belongsTo(User, { foreignKey: 'userId', as: 'user' });

    
}