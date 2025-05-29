export const getAllNotes =
  ('/',
  (req, res) => {
    res.status(200).send('You just fetched the notes ');
  });

export function createNotes(req, res) {
  // const note = req.body;
  res.status(201).send(`Note created`);
}

export function updateNotes(req, res) {
  //   const { id } = req.params;
  res.status(200).send(`You just updated the note`);
}
export function deleteNotes(req, res) {
  //   const { id } = req.params;
  res.status(200).send(`You just deleted the note`);
}
