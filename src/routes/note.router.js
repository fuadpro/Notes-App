const express = require("express");
const { noteController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth.middleware");

const router = express.Router();

router.get('/', authMiddleware , noteController.getAllNotes)
router.get('/:id', noteController.getNoteById);

router.post('/', authMiddleware , noteController.createNote)

router.put('/:id', noteController.updateNote);

router.delete('/:id', noteController.deleteNote);

module.exports = router;