'use client';

import React from 'react'
import 'core-js/actual';

export default function RosterTable({ employees, employeeRequired }: { employees: any, employeeRequired: any }) {
    // employees group by there designation
    const employeesGrouped = employees.group((employee: any) => employee?.designation?.name);
    const scheduleData = employeeRequired.group((empRequired: any) => empRequired?.weekday);

    const employeeData: any = {};//Kep only name array for every  designation eg. {designation: ['employee name']}

    for (const key in employeesGrouped) {
        employeeData[key] = employeesGrouped[key].map((item: any) => item?.name);
    }

    const dutyRoster: any = {};

    // Loop through the schedule data and add employee names, workstation name, and count value
    for (const weekday in scheduleData) {

        // Create an object to track assigned employees for the entire day
        const assignedEmployees: any = {};

        dutyRoster[weekday] = scheduleData[weekday].map((entry: any) => {

            const designation = entry.designation.name;
            const count = entry.count;
            const workstation = entry.workstation.name;
            const employees = [...employeeData[designation]] || [];
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

    // Now, `dutyRoster` contains the duty roster for each weekday with employee names, workstation names, and count values, ensuring that an employee is not repeated for a single day.
    // console.log(dutyRoster);



    return (
        <div>{JSON.stringify(dutyRoster)}</div>
    )
}
