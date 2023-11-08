import * as _ from "lodash";

export default function generateRoster(scheduleData: any, employeeData: any) {
  const dutyRoster: any = {};

  // Loop through the schedule data and add employee names, workstation name, and count value
  for (const weekday in scheduleData) {
    // Create an object to track assigned employees for the entire day
    const assignedEmployees: any = {};

    dutyRoster[weekday] = scheduleData[weekday].map((entry: any) => {
      const designation = entry?.designation?.name;
      const count = entry?.count;
      const workstation = entry?.workstation?.name;
      const employees = [..._.shuffle(employeeData[designation])] || [];
      const employeesForDay = [];

      for (let i = 0; i < count; i++) {
        let employee = employees.shift();
        while (assignedEmployees[employee]) {
          // If the employee is already assigned for the day, get the next one
          employee = employees.shift();
        }
        if (employee) {
          employeesForDay.push(employee);
          assignedEmployees[employee] = true; // Mark the employee as assigned for the day
        }
      }

      return {
        weekday: entry.weekday,
        employees: employeesForDay,
        workstation: workstation,
        count: employeesForDay.length,
      };
    });
  }

  return dutyRoster;
}
