const { authService } = require("../services");


const signIn = async (req, res) => {
    const params = req.body;
    try {
        let result = await authService.login(params);
        res.json(result);
    } catch (error) {
        switch  (error?.message){
            case "username_not_found":
                res.status(404).json({ message: "Username is not found"});
                break;
            case "password_invalid":
                res.status(400).json({ message: "Password is not correct"});
                break;
            default:
                res.status(500).json({ message: error.message});
                break;
        }
    }
}


module.exports = {
    signIn,
}