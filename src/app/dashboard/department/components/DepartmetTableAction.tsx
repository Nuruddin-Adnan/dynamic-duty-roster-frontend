'use client'
import React from 'react'
import revalidateByTag from '@/services/revalidateByTag'
import Link from 'next/link'
import { departmentService } from '@/services/department/department.service'

export default function DepartmentTableAction({ id }: { id: string }) {

    const handleDelete = async (id: any) => {
        const userConfirmed = window.confirm('Are you sure you want to proceed?');
        if (userConfirmed) {
            await departmentService.deleteDepartment(id)
            await revalidateByTag('department')
        }
    }

    return (
        <div className="flex space-x-2">
            <Link href={`/dashboard/department/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-1 px-2 rounded">
                Edit
            </Link>
            <button onClick={() => handleDelete(id)} className="bg-red-500 hover:bg-red-700 text-white font-bold text-xs py-1 px-2 rounded">
                Delete
            </button>
        </div>
    )
}
