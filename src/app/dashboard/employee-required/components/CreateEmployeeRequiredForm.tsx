'use client'
import React, { useState } from 'react'
import revalidateByTag from '@/services/revalidateByTag'
import { useRouter } from 'next/navigation';
import { employeeRequiredService } from '@/services/employeeRequired/employeeRequired.service';
import Loading from '@/components/Loading';

export default function CreateEmployeeRequiredForm({ designations, workstations }: { designations: any, workstations: any }) {
    const [loading, setLoading] = useState(false)

    const router = useRouter();

    if (loading) {
        return <Loading />
    }

    async function action(formData: FormData) {



        const countValue = formData.get('count');
        if (countValue === null) {
            alert('Please enter the required employee number');
            return false;
        }

        const count = parseInt(countValue as string, 10); // Parse the value to an integer

        if (isNaN(count)) {
            alert('Invalid number format');
            return false;
        }

        if (count < 1) {
            alert('Please enter a valid number greater than 0');
            return false;
        }


        if (formData.get('weekday') === '') {
            alert('Please select a week day');
            return false
        } else if (formData.get('workstation') === '') {
            alert('Please select a workstation');
            return false
        } else if (formData.get('designation') === '') {
            alert('Please select a designation');
            return false
        }

        const FormDataObject = {
            weekday: formData.get('weekday'),
            workstation: formData.get('workstation'),
            designation: formData.get('designation'),
            count: count,
        }

        try {
            setLoading(true)
            const result = await employeeRequiredService.createEmployeeRequired(FormDataObject)
            if (result.success === false) {
                alert('something went wrong');
                setLoading(false)
                return false;
            }
            await revalidateByTag('employee-required');
            setLoading(false)
            router.push('/dashboard/employee-required')
        } catch (e) {
            setLoading(false)
            return { message: 'Failed to create' }
        }
    }

    return (
        <form action={action}>
            <div className="mb-4">
                <label className="block text-gray-600">Week Day</label>
                <select name="weekday" className="w-full p-2 border rounded-md">
                    <option value='saturday'>Saturday</option>
                    <option value='sunday'>Sunday</option>
                    <option value='monday'>Monday</option>
                    <option value='tuesday'>Tuesday</option>
                    <option value='wednesday'>Wednesday</option>
                    <option value='thursday'>Thursday</option>
                    <option value='friday'>Friday</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-600">Workstation</label>
                <select name="workstation" className="w-full p-2 border rounded-md">
                    {
                        workstations && workstations.map((workstation: any) => <option key={workstation?._id} value={workstation?._id}>{workstation?.name}</option>)
                    }
                </select>
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
                <label className="block text-gray-600">Required Number</label>
                <input type="number" name="count" className="w-full p-2 border rounded-md" />
            </div>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    )
}