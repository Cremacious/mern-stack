import Note from '../../models/Note.js';

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
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
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error('Error in createNotes controller', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}

export async function updateNotes(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      res.status(404).json({ message: 'Note not found' });
    }
    res.status(201).json(updatedNote);
  } catch (error) {
    console.error('Error in updateNotes controller', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}

export async function deleteNotes(req, res) {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      res.status(404).json({ message: 'Note not found' });
    }
    res.status(201).json({ message: 'Deleted note' });
  } catch (error) {
    console.error('Error in deleteNotes controller', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ message: 'Note not found' });
    }
    res.status(201).json(note);
  } catch (error) {
    console.error('Error in deleteNotes controller', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
