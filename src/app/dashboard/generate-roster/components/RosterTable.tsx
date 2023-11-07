'use client';

import React, { useState } from 'react'
import 'core-js/actual';
import useGenerateRoster from '@/hooks/useGenerateRoster';
import * as _ from "lodash";

export default function RosterTable({ employees, employeeRequired }: { employees: any, employeeRequired: any }) {

    const [employeesState, setEmployeesState] = useState<any>(employees);

    // employees group by there designation
    const employeesGrouped = employeesState.group((employee: any) => employee?.designation?.name);
    const scheduleData = employeeRequired.group((empRequired: any) => empRequired?.weekday);

    const employeeData: any = {};//Kep only name array for every  designation eg. {designation: ['employee name']}

    for (const key in employeesGrouped) {
        employeeData[key] = employeesGrouped[key].map((item: any) => item?.name);
    }

    function handleRegenerateRoster() {
        setEmployeesState(_.shuffle(employeesState))
    }


    const dutyRoster = useGenerateRoster(scheduleData, employeeData)


    return (
        <div className="container mx-auto">
            <div className="rounded overflow-hidden shadow-lg">
                <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
                    <span className='text-gray-700 font-bold text-xl'>Dynamic Dury Roster</span>
                    <button onClick={handleRegenerateRoster} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                        Regenerate
                    </button>
                </div>
                <div className="px-6 py-4">
                    <table className="bg-gray-50 w-full">
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                dutyRoster && Object.keys(dutyRoster).map((weekday: any) => <tr key={weekday}>
                                    <td className='px-6 py-4 whitespace-nowrap  text-gray-900  font-medium capitalize' colSpan={50}>
                                        {weekday}
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td className="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Workstation</td>
                                                    <td className="px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Employees</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    dutyRoster[weekday].map((roster: any) => <tr key={roster?._id}>
                                                        <td className="px-6 py-[2px] whitespace-nowrap text-sm text-gray-900 capitalize">{roster?.workstation}</td>
                                                        <td className="px-6 py-[2px] whitespace-nowrap text-sm text-gray-900 capitalize">{roster?.employees.join(', ')}</td>
                                                    </tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
