import express from 'express';

const app = express();

app.get('/api/notes', (req, res) => {
  res.send('You have 10 notes');
});

app.post('/api/notes', (req, res) => {
  res.status(201).json({
    message: 'Post created successfully',
  });
});

app.put('/api/notes/:id', (req, res) => {
  res.status(200).json({
    message: `Note with ID updated successfully`,
  });
});

app.delete('/api/notes/:id', (req, res) => {
  res.status(200).json({
    message: `Note with ID deleted successfully`,
  });
});

app.listen(5001, () => {
  console.log('Server on port 5001');
});
