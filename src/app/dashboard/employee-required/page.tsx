import Link from 'next/link';
import React from 'react'
import { employeeRequiredService } from '@/services/employeeRequired/employeeRequired.service';
import EmployeeRequiredTableAction from './components/EmployeeRequiredTableAction';


export default async function EmployeeRequiredPage() {

    const { data: employeeRequireds } = await employeeRequiredService.getAllEmployeeRequireds('sort=weekday');
    return (
        <div>
            <div className="container mx-auto">
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
                        <span className='text-gray-700 font-bold text-xl'>Employee Required</span>
                        <Link href='/dashboard/employee-required/create-employee-required' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            Create New
                        </Link>
                    </div>
                    <div className="px-6 py-4">
                        <table className="bg-gray-50 w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Weekday</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Workstation</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Required Number</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    employeeRequireds && employeeRequireds.map((employeeRequired: any) => <tr key={employeeRequired._id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">{employeeRequired?.weekday}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employeeRequired?.workstation?.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employeeRequired?.designation?.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employeeRequired?.count}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><EmployeeRequiredTableAction id={employeeRequired._id} /></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}
