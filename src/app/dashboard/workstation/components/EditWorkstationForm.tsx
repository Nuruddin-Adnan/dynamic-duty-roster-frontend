'use client'
import React from 'react'
import createEmployee from '@/services/employee/createEmployee'
import revalidateByTag from '@/services/revalidateByTag'
import { useRouter } from 'next/navigation';
import updateEmployee from '@/services/employee/updateEmployee';
import { departmentService } from '@/services/department/department.service';
import { designationService } from '@/services/designation/designation.service';
import { workstationService } from '@/services/workstation/workstation.service';

export default function EditWorkstationForm({ workstation }: { workstation: any }) {
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
            const result = await workstationService.updateWorkstation(workstation._id, FormDataObject)
            if (result.success === false) {
                alert('something went wrong');
                return false;
            }
            await revalidateByTag('workstation');
            router.push('/dashboard/workstation')
        } catch (e) {
            return { message: 'Failed to create' }
        }
    }

    return (
        <form action={action}>
            <div className="mb-4">
                <label className="block text-gray-600">Name</label>
                <input type="text" name="name" className="w-full p-2 border rounded-md" placeholder="John Doe" defaultValue={workstation?.name} />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Update</button>
        </form>
    )
}
