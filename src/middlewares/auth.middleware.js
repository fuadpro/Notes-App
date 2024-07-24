const { userService } = require("../services");
const { decodePayload } = require("../utils/jwt.util");

const authMiddleware = async ( req, res, next) => {
    let token = req.headers.authorization;
    if(!token?.includes("Bearer")){
        return res.status(401).json({message: "Token is not define"})
    }

    token = token?.split(" ")[1];

    const result = decodePayload(token);

    if(!result?.userId){
        return res.status(401).json({message: "Token is invalid"})
    }

    const user = await userService.findById(result.userId)

    if(!user){
        return res.status(401).json({message: "Unathorized"})
    }

    req.user = user;

    next();

}

module.exports = {
    authMiddleware,
}