const User = require("../models/User");

const createUser = async (params) => {

    const { username, password} = params;

    let existUser = await findByUsername(username)

    if(existUser) throw new Error('User already exists');

    let user = await User.create({
        username,
        password
    })

    return user;
};

const findByUsername = async (username) => {
    let user = await User.findOne({where : {username}})
    return user;
}

const findAllUsers = async () => {
    let users = await User.findAll();
    return users;
};

const findById = async (id) => {
    let user = await User.findByPk(id); 
    return user;
};

const updateUser = async (id, params) => {
    const { username, password } = params;

    let user = await User.findByPk(id);

    if (!user) {
        throw new Error('User not found');
    }

    user.username = username || user.username;
    user.password = password || user.password;

    await user.save();

    return user;
};

const deleteUser = async (id) => {
    let user = await User.findByPk(id);
    if (!user) {
        throw new Error('User not found');
    }

    await user.destroy();

    return { message: 'User deleted successfully' };
};

module.exports = {
    createUser,
    findByUsername,
    findAllUsers,
    findById,
    updateUser,
    deleteUser,
}