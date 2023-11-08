'use client';

import React, { useState } from 'react'
import 'core-js/actual';
import useGenerateRoster from '@/hooks/useGenerateRoster';
import { useAppDispatch } from '@/redux/hook';
import { setRosterData } from '@/redux/features/roster/rosterSlice';
import * as _ from "lodash";
import Link from 'next/link';
import { AiOutlineRedo, AiOutlinePrinter } from 'react-icons/ai';

export default function RosterTable({ employees, employeeRequired }: { employees: any, employeeRequired: any }) {

    const dispatch = useAppDispatch();

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


    const dutyRoster = useGenerateRoster(scheduleData, employeeData);

    if (dutyRoster) {
        dispatch(setRosterData(dutyRoster))
    }


    return (
        <div className="container mx-auto">
            <div className="rounded overflow-hidden shadow-lg">
                <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
                    <span className='text-gray-700 font-bold text-xl'>Dynamic Dury Roster</span>
                    <div className='flex'>
                        <Link href='/dashboard/generate-roster/print-roster' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center me-4">
                            <span className='text-lg me-2'>
                                <AiOutlinePrinter />
                            </span>
                            Print
                        </Link>
                        <button onClick={handleRegenerateRoster} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
                            <span className='text-lg me-2'>
                                <AiOutlineRedo />
                            </span>
                            Regenerate
                        </button>
                    </div>
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
