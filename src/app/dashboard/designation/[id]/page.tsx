import React from 'react'
import EditDepartmentForm from '../components/EditDesignationForm';
import { designationService } from '@/services/designation/designation.service';
import EditDesignationtForm from '../components/EditDesignationForm';

export default async function EditDesignation({ params }: { params: { id: string } }) {
  const { data: designation } = await designationService.getSingleDesignation(params.id);

  return (
    <div className="container mx-auto">
      <div className="rounded overflow-hidden shadow-lg max-w-lg">
        <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
          <span className='text-gray-700 font-bold text-xl'>Department Edit</span>
        </div>
        <div className="px-6 py-4">
          <EditDesignationtForm designation={designation} />
        </div>
      </div>
    </div>
  )
}
