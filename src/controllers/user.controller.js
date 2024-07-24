const { userService } = require("../services")

const createUser = async (req, res) => {
    try {
        let user = await userService.createUser(req.body)
        res.json({
            staus: true,
            message: "User Created",
            user ,
        })
    } catch (error) {
        res.status(409).json({
            status: false,
            message: error.message,
        });
    }
}

const findByUsername = async (req, res) => {
    try {
        let username = req.query.username;
        if (!username) {
            return res.status(400).json({
                status: false,
                message: 'Username is required',
            });
        }
        let user = await userService.findByUsername(username);
        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found',
            });
        }
        res.json({
            status: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
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

const getUserById = async(req, res) =>{
    try {
        let id = req.params.id
        let user = await userService.findById(id);
        res.json({
            status: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
}

const handleGetUsers = async (req, res) => {
    if (req.query.username) {
        await findByUsername(req, res);
    } else {
        await getUsers(req, res);
    }
};

const updateUser = async (req, res) => {
    try {
        let user = await userService.updateUser(req.params.id, req.body);
        res.json({
            status: true,
            message: " User Updated",
            user,
        })
    } catch (error) {
        res.status(409).json({
            status: false,
            message: error.message,
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);
        res.json({
            status: true,
            message: "User Deleted",
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
}


module.exports = {
    createUser,
    findByUsername,
    handleGetUsers,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
}