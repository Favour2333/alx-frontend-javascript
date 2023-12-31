/**
 * This function retrieves a list of students.
 * @author kingsley favour <https://github.com/favour233>
 * @returns {{id: Number, firstName: String, Location: String}[]}
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
