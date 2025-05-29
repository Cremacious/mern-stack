import express from 'express';

const app = express();

app.get('/api/notes', (req, res) => {
  res.send('You have 5 notes');
});

app.listen(5001, () => {
  console.log('Server on port 5001');
});
