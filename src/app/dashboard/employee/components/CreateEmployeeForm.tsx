'use client'
import React from 'react'
import createEmployee from '@/services/employee/createEmployee'
import revalidateByTag from '@/services/revalidateByTag'
import { useRouter } from 'next/navigation';

export default function CreateEmployeeForm({ designations, departments }: { designations: any, departments: any }) {
    const router = useRouter();
    async function action(formData: FormData) {

        if (formData.get('name') === '') {
            alert('Please enter the name');
            return false
        }

        const FormDataObject = {
            name: formData.get('name'),
            designation: formData.get('designation'),
            department: formData.get('department'),
        }

        try {
            const result = await createEmployee(FormDataObject)
            if (result.success === false) {
                alert('something went wrong');
                return false;
            }
            await revalidateByTag('employee');
            router.push('/dashboard/employee')
        } catch (e) {
            return { message: 'Failed to create' }
        }
    }

    return (
        <form action={action}>
            <div className="mb-4">
                <label className="block text-gray-600">Name</label>
                <input type="text" name="name" className="w-full p-2 border rounded-md" placeholder="John Doe" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-600">Designation</label>
                <select id="designation" name="designation" className="w-full p-2 border rounded-md">
                    {
                        designations && designations.map((designation: any) => <option key={designation?._id} value={designation?._id}>{designation?.name}</option>)
                    }
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-600">Department</label>
                <select name="department" className="w-full p-2 border rounded-md">
                    {
                        departments && departments.map((department: any) => <option key={department?._id} value={department?._id}>{department?.name}</option>)
                    }
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    )
}
