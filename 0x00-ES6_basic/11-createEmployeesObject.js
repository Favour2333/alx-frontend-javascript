export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: [...employees],
  };

  return employeesObject;
}
const department = 'IT';
const employeeList = ['John Doe', 'Jane Smith', 'Mark Johnson'];

console.log(createEmployeesObject(department, employeeList));
