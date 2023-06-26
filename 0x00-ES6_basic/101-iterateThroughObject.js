export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let iteration = reportWithIterator.next();

  while (!iteration.done) {
    result += `${iteration.value} | `;
    iteration = reportWithIterator.next();
  }

  // Remove the trailing ' | ' from the result
  result = result.slice(0, -3);

  return result;
}
import createEmployeesObject from './previous-file.js';
import createReportObject from './previous-file.js';
import createIteratorObject from './previous-file.js';
import iterateThroughObject from './current-file.js';

const engineering = ['John Doe', 'Guillaume Salva'];
const design = ['Kanye East', 'Jay Li'];

const employees = {
  ...createEmployeesObject('engineering', engineering),
  ...createEmployeesObject('design', design),
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
// Output: 'John Doe | Guillaume Salva | Kanye East | Jay Li'

