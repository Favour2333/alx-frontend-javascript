export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };

  return reportObject;
}
const employeesList = {
  engineering: ['John Doe', 'Guillaume Salva'],
  sales: ['Jane Smith', 'Mark Johnson', 'Emily Davis'],
};

console.log(createReportObject(employeesList));

