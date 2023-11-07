import React from 'react'
import { departmentService } from '@/services/department/department.service';
import EditDepartmentForm from '../components/EditDepartmentForm';

export default async function EditDepartment({ params }: { params: { id: string } }) {
  const { data: department } = await departmentService.getSingleDepartment(params.id);

  return (
    <div className="container mx-auto">
      <div className="rounded overflow-hidden shadow-lg max-w-lg">
        <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
          <span className='text-gray-700 font-bold text-xl'>Department Edit</span>
        </div>
        <div className="px-6 py-4">
          <EditDepartmentForm department={department} />
        </div>
      </div>
    </div>
  )
}
