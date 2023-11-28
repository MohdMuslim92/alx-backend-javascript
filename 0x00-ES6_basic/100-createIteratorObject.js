export default function createIteratorObject(report) {
  function* iterateEmployees(reportData) {
    for (const departmentEmployees of Object.values(reportData.allEmployees)) {
      yield* departmentEmployees;
    }
  }

  const iterator = {
    [Symbol.iterator]() {
      return iterateEmployees(report);
    },
  };

  return iterator;
}
