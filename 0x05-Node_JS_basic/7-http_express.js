// Express server with plain text responses for "/" and "/students" endpoints
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const [, , database] = process.argv;

  try {
    const message = 'This is the list of our students\n';
    const studentResponse = await countStudents(database);

    // Send the entire response in a single send call
    res.send(`${message}${studentResponse}`);
  } catch (error) {
    // Define 'message' here to avoid eslint error
    const message = 'This is the list of our students\n';
    res.send(`${message}${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
