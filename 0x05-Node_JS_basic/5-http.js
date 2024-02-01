/** Creates an HTTP server that responds with different messages based on the
 * requested URL path, including student information if the path is
 * '/students'.
 */
const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    const [, , database] = process.argv;

    countStudents(database)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
