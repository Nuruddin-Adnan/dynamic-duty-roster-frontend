'use client'
import React from 'react'
import revalidateByTag from '@/services/revalidateByTag'
import Link from 'next/link'
import { departmentService } from '@/services/department/department.service'
import { designationService } from '@/services/designation/designation.service'
import { workstationService } from '@/services/workstation/workstation.service'

export default function WorkstationTableAction({ id }: { id: string }) {

    const handleDelete = async (id: any) => {
        const userConfirmed = window.confirm('Are you sure you want to proceed?');
        if (userConfirmed) {
            await workstationService.deleteWorkstation(id)
            await revalidateByTag('workstation')
        }
    }

    return (
        <div className="flex space-x-2">
            <Link href={`/dashboard/workstation/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-1 px-2 rounded">
                Edit
            </Link>
            <button onClick={() => handleDelete(id)} className="bg-red-500 hover:bg-red-700 text-white font-bold text-xs py-1 px-2 rounded">
                Delete
            </button>
        </div>
    )
}
