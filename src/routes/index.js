const express = require("express");
const authRouter = require("./auth.router")
const userRouter = require("./user.router")
const noteRouter = require("./note.router")

const router = express.Router();

router.get("/", (req,res) => res.json({ hello: "world"}))

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/notes', noteRouter);

module.exports = router;