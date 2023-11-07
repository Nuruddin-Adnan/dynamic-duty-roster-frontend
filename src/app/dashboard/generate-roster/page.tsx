import getEmployees from '@/services/employee/getEmployees';
import { employeeRequiredService } from '@/services/employeeRequired/employeeRequired.service';
import React from 'react'
import RosterTable from './components/RosterTable';

export default async function GenerateRoster() {
    const employeeRequiredData = employeeRequiredService.getAllEmployeeRequireds('sort=weekday');
    const employeesData = getEmployees();

    // Wait for the promises to resolve
    const [{ data: employeeRequired }, { data: employees }] = await Promise.all([employeeRequiredData, employeesData])

    return (
        <div>
            <RosterTable employees={employees} employeeRequired={employeeRequired} />
        </div>
    )
}
