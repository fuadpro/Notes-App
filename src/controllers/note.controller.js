const { noteService } = require("../services");


const createNote = async (req, res) => {

    try {
        const { user } = req;
        let params = {...req.body, userId: user.id};

        let note = await noteService.createNote(params)
        res.json({
            staus: true,
            message: "Note Created Success",
            note ,
        })
    } catch (error) {
        res.status(409).json({
            status: false,
            message: error.message,
        });
    }
}

const getAllNotes = async (req, res) => {
    try {
        const { user } = req;

        // let notes = await noteService.findAllNotes();

        let notes = await noteService.findUserNotes(user.id);
        res.json({
            status: true,
            notes,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
};

const getNoteById = async (req, res) => {
    try {
        let note = await noteService.findNotById(req.params.id);
        if (!note) {
            return res.status(404).json({
                status: false,
                message: "Note not found",
            });
        }
        res.json({
            status: true,
            note,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
};

const updateNote = async (req, res) => {
    try {
        let note = await noteService.updateNote(req.params.id, req.body);
        res.json({
            status: true,
            message: "Note Updated",
            note,
        });
    } catch (error) {
        res.status(409).json({
            status: false,
            message: error.message,
        });
    }
};

const deleteNote = async (req, res) => {
    try {
        await noteService.deleteNote(req.params.id);
        res.json({
            status: true,
            message: "Note Deleted",
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
};


module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
};