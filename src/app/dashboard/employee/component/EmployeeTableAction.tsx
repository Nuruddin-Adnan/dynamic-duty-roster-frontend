'use client'
import React from 'react'
import Router from 'next/router'
import revalidateByTag from '@/services/revalidateByTag'
import deleteEmployee from '@/services/employee/deleteEmployee'
import Link from 'next/link'

export default function EmployeeAction({ id }: { id: string }) {

    const handleDelete = async (id: any) => {
        const userConfirmed = window.confirm('Are you sure you want to proceed?');
        if (userConfirmed) {
            await deleteEmployee(id)
            await revalidateByTag('employee')
        }
    }

    return (
        <div className="flex space-x-2">
            <Link href={`/dashboard/employee/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-1 px-2 rounded">
                Edit
            </Link>
            <button onClick={() => handleDelete(id)} className="bg-red-500 hover:bg-red-700 text-white font-bold text-xs py-1 px-2 rounded">
                Delete
            </button>
        </div>
    )
}
