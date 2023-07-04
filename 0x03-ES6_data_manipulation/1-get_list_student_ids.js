/**
 * This function retrieves an array of student ids from a list of objects.
 * Author: Kingsley Favour <https://github.com/favour233>
 * @param {Array} students - The list of student objects.
 * @returns {Array} - An array of student ids.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
