const express = require("express");
const { userController } = require("../controllers");

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.query.username) {
        await userController.findByUsername(req, res);
    } else {
        await userController.getUsers(req, res);
    }
});
// or 
// router.get('/', userController.handleGetUsers);
// localhost:3000/users/?username= 

router.get('/:id',userController.getUserById)

router.post('/', userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

module.exports = router;