/**
 * This function retrieves ids from a list of students
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String,
 * }[]} students - The list of students.
 * @author kingsley favour <https://github.com/favour233>
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
