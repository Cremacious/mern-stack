import Note from '../../models/Note.js';

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error in getAllNotes controller', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({ message: 'Note created successfully' });
  } catch (error) {
    console.error('Error in createNotes controller', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}

export function updateNotes(req, res) {
  //   const { id } = req.params;
  res.status(200).send(`You just updated the note`);
}
export function deleteNotes(req, res) {
  //   const { id } = req.params;
  res.status(200).send(`You just deleted the note`);
}
