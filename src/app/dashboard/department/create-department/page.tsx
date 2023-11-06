'use client'

import { departmentService } from "@/services/department/department.service";
import revalidateByTag from "@/services/revalidateByTag";
import { useRouter } from "next/navigation";

export default function CreateDepartmentPage() {

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
            const result = await departmentService.createDepartment(FormDataObject)
            if (result.success === false) {
                alert('something went wrong');
                return false;
            }
            await revalidateByTag('/dashboard/department');
            router.push('/dashboard/department')
        } catch (e) {
            return { message: 'Failed to create' }
        }
    }

    return (
        <div className="container mx-auto">
            <div className="rounded overflow-hidden shadow-lg max-w-lg">
                <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
                    <span className='text-gray-700 font-bold text-xl'>Department Create</span>
                </div>
                <div className="px-6 py-4">
                    <form action={action}>
                        <div className="mb-4">
                            <label className="block text-gray-600">Department Name</label>
                            <input type="text" name="name" className="w-full p-2 border rounded-md" placeholder="Enter department name" />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
