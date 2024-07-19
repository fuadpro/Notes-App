const { userService } = require("../services")

const createUser = async (req, res) => {

    console.log(req.body);

    let user = await userService.createUser(req.body)

    res.json({
        staus: true,
        message: "User Created",
        user ,
    })
}

const getUsers = async (req, res) => {
    try {
        let users = await userService.findAllUsers();
        res.json({
            status: true,
            users,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
};


module.exports = {
    createUser,
    getUsers,
}