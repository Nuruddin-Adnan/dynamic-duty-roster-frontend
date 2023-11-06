'use client'
import React from 'react'
import createEmployee from '@/services/employee/createEmployee'
import revalidateByTag from '@/services/revalidateByTag'
import { useRouter } from 'next/navigation';
import updateEmployee from '@/services/employee/updateEmployee';
import { departmentService } from '@/services/department/department.service';
import { designationService } from '@/services/designation/designation.service';

export default function EditDesignationtForm({ designation }: { designation: any }) {
    const router = useRouter();

    async function action(formData: FormData) {

        if (formData.get('name') === '') {
            alert('Please enter the name');
            return false
        }

        const FormDataObject = {
            name: formData.get('name'),
        }

        try {
            const result = await designationService.updateDesignation(designation._id, FormDataObject)
            if (result.success === false) {
                alert('something went wrong');
                return false;
            }
            await revalidateByTag('designation');
            router.push('/dashboard/designation')
        } catch (e) {
            return { message: 'Failed to create' }
        }
    }

    return (
        <form action={action}>
            <div className="mb-4">
                <label className="block text-gray-600">Name</label>
                <input type="text" name="name" className="w-full p-2 border rounded-md" placeholder="John Doe" defaultValue={designation?.name} />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Update</button>
        </form>
    )
}
