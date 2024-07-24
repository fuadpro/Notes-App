const Note = require("../models/Note")

const createNote = async (params) => {
    const { title, description, userId } = params || {};

    let note = await Note.create({
        title,
        description,
        userId,
    })

    return note;
};

const findAllNotes = async () => {
    let notes = await Note.findAll();
    return notes;
};

const findNotById = async (id) => {
    let note = await Note.findByPk(id); 
    return note;
};

const findUserNotes = async (userId) => {
    const notes = Note.findAll({ where : {userId} } );
    return notes;
}

const updateNote = async (id, params) => {
    const { title, description } = params;

    let note = await Note.findByPk(id);

    if (!note) {
        throw new Error('Note not found');
    }

    note.title = title || note.title;
    note.description = description || note.description;

    await note.save();

    return note;
};

const deleteNote = async (id) => {
    let note = await Note.findByPk(id);
    if (!note) {
        throw new Error('Note not found');
    }

    await note.destroy();

    return { message: 'Note deleted successfully' };
};

module.exports = {
    createNote,
    findAllNotes,
    findNotById,
    updateNote,
    deleteNote,
    findUserNotes
}