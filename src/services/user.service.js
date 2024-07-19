const User = require("../models/User");

const createUser = async (params) => {

    const { username, password} = params;

    let existUser = await findUserByUsername(username)

    if(existUser) throw new Error('User already exists');

    let user = await User.create({
        username,
        password
    })

    return user;
};

const findUserByUsername = async (username) => {
    let user = await User.findOne({where : {username}})
    return user;
}

const findAllUsers = async () => {
    let users = await User.findAll();
    return users;
};

module.exports = {
    createUser,
    findUserByUsername,
    findAllUsers
}