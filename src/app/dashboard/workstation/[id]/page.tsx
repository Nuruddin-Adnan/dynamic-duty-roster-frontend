import React from 'react'
import EditDepartmentForm from '../components/EditWorkstationForm';
import EditDesignationtForm from '../components/EditWorkstationForm';
import { workstationService } from '@/services/workstation/workstation.service';
import EditWorkstationForm from '../components/EditWorkstationForm';

export default async function EditWorkstation({ params }: { params: { id: string } }) {
  const { data: workstation } = await workstationService.getSingleWorkstation(params.id);

  return (
    <div className="container mx-auto">
      <div className="rounded overflow-hidden shadow-lg max-w-lg">
        <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
          <span className='text-gray-700 font-bold text-xl'>Workstation Edit</span>
        </div>
        <div className="px-6 py-4">
          <EditWorkstationForm workstation={workstation} />
        </div>
      </div>
    </div>
  )
}
