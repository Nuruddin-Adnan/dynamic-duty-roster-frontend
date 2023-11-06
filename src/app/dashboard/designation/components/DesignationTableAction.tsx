'use client'
import React from 'react'
import revalidateByTag from '@/services/revalidateByTag'
import Link from 'next/link'
import { departmentService } from '@/services/department/department.service'
import { designationService } from '@/services/designation/designation.service'

export default function DesignationTableAction({ id }: { id: string }) {

    const handleDelete = async (id: any) => {
        const userConfirmed = window.confirm('Are you sure you want to proceed?');
        if (userConfirmed) {
            await designationService.deleteDesignation(id)
            await revalidateByTag('designation')
        }
    }

    return (
        <div className="flex space-x-2">
            <Link href={`/dashboard/designation/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-1 px-2 rounded">
                Edit
            </Link>
            <button onClick={() => handleDelete(id)} className="bg-red-500 hover:bg-red-700 text-white font-bold text-xs py-1 px-2 rounded">
                Delete
            </button>
        </div>
    )
}
