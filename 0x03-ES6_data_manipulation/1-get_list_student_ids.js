/**
 * This function retrieves an array of student ids from a list of objects.
 * Author: Kingsley Favour <https://github.com/favour2333>
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String,
 * }[]} students - The list of students.
 * @returns {Array} - An array of student ids.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
