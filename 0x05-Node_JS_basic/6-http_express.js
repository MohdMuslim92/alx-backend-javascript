/** Creates a simple HTTP server using Express, listening on port 1245, and
 * responds with "Hello Holberton School!" for the root endpoint.
 */
const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
