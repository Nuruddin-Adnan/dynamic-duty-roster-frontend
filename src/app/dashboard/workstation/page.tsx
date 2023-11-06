import Link from 'next/link';
import React from 'react'
import { designationService } from '@/services/designation/designation.service';
import WorkstationTableAction from './components/WorkstationTableAction';
import { workstationService } from '@/services/workstation/workstation.service';


export default async function WorkstationPage() {

    const { data: workstations } = await workstationService.getAllWorkstations();
    return (
        <div>
            <div className="container mx-auto">
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
                        <span className='text-gray-700 font-bold text-xl'>Workstation</span>
                        <Link href='/dashboard/workstation/create-workstation' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
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
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    workstations && workstations.map((workstation: any) => <tr key={workstation._id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{workstation?.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><WorkstationTableAction id={workstation._id} /></td>
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
