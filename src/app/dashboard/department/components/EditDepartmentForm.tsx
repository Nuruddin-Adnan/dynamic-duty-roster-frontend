'use client'
import React from 'react'
import revalidateByTag from '@/services/revalidateByTag'
import { useRouter } from 'next/navigation';
import { departmentService } from '@/services/department/department.service';

export default function EditDepartmentForm({ department }: { department: any }) {
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
            const result = await departmentService.updateDepartment(department._id, FormDataObject)
            if (result.success === false) {
                alert('something went wrong');
                return false;
            }
            await revalidateByTag('department');
            router.push('/dashboard/department')
        } catch (e) {
            return { message: 'Failed to create' }
        }
    }

    return (
        <form action={action}>
            <div className="mb-4">
                <label className="block text-gray-600">Name</label>
                <input type="text" name="name" className="w-full p-2 border rounded-md" placeholder="John Doe" defaultValue={department?.name} />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Update</button>
        </form>
    )
}
