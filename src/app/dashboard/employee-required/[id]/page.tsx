import React from 'react'
import { designationService } from '@/services/designation/designation.service';
import EditEmployeeRequiredForm from '../components/EditEmployeeRequiredForm';
import { workstationService } from '@/services/workstation/workstation.service';
import { employeeRequiredService } from '@/services/employeeRequired/employeeRequired.service';

export default async function EmployeeRequired({ params }: { params: { id: string } }) {
    const employeeRequiredData = employeeRequiredService.getSingleEmployeeRequired(params.id);
    const designationsData = designationService.getAllDesignations();
    const workstationData = workstationService.getAllWorkstations();

    // Wait for the promises to resolve
    const [{ data: designations }, { data: workstations }, { data: employeeRequired }] = await Promise.all([designationsData, workstationData, employeeRequiredData])

    return (
        <div className="container mx-auto">
            <div className="rounded overflow-hidden shadow-lg max-w-lg">
                <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
                    <span className='text-gray-700 font-bold text-xl'>Department Edit</span>
                </div>
                <div className="px-6 py-4">
                    <EditEmployeeRequiredForm designations={designations} workstations={workstations} employeeRequired={employeeRequired} />
                </div>
            </div>
        </div>
    )
}
