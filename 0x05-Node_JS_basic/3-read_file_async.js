/** Reads a CSV database file containing student information asynchronously
 * using Promises. Counts the total number of students and logs the count
 * and list of students in each field.
 */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = [];

        lines.forEach((line) => {
          const [firstname, lastname, age, field] = line.split(',');

          // Check if all fields are present and non-empty
          if (firstname.trim() && lastname.trim() && age.trim() && field.trim()) {
            students.push({ firstname, field });
          }
        });

        const totalStudents = students.length;
        const fields = {};

        students.forEach((student) => {
          if (!fields[student.field]) {
            fields[student.field] = { count: 1, names: [student.firstname] };
          } else {
            fields[student.field].count += 1;
            fields[student.field].names.push(student.firstname);
          }
        });

        const output = [`Number of students: ${totalStudents}`];

        Object.entries(fields).forEach(([field, info]) => {
          output.push(`Number of students in ${field}: ${info.count}. List: ${info.names.join(', ')}`);
        });

        resolve(output.join('\n'));
      }
    });
  });
}

module.exports = countStudents;
