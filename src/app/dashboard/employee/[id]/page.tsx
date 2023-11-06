import getSingleEmployee from '@/services/employee/getSingleEmployee'
import React from 'react'
import EditEmployeeForm from '../components/EditEmployeeForm';
import { designationService } from '@/services/designation/designation.service';
import { departmentService } from '@/services/department/department.service';

export default async function EditEmployee({ params }: { params: { id: string } }) {
  const employeeData = getSingleEmployee(params.id);
  const designationsData = designationService.getAllDesignations();
  const departmentsData = departmentService.getAllDepartments();

  // Wait for the promises to resolve
  const [{ data: employee }, { data: designations }, { data: departments }] = await Promise.all([employeeData, designationsData, departmentsData])

  return (
    <div className="container mx-auto">
      <div className="rounded overflow-hidden shadow-lg max-w-lg">
        <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
          <span className='text-gray-700 font-bold text-xl'>Employee Edit</span>
        </div>
        <div className="px-6 py-4">
          <EditEmployeeForm designations={designations} departments={departments} employee={employee} />
        </div>
      </div>
    </div>
  )
}
