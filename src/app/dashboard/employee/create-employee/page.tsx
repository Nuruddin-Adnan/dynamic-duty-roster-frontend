import { departmentService } from '@/services/department/department.service';
import { designationService } from '@/services/designation/designation.service';
import CreateEmployeeForm from '../components/CreateEmployeeForm';

export default async function CreateEmployeePage() {
    const designationsData = designationService.getAllDesignations();
    const departmentsData = departmentService.getAllDepartments();

    // Wait for the promises to resolve
    const [{ data: designations }, { data: departments }] = await Promise.all([designationsData, departmentsData])


    return (
        <div className="container mx-auto">
            <div className="rounded overflow-hidden shadow-lg max-w-lg">
                <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
                    <span className='text-gray-700 font-bold text-xl'>Employee Create</span>
                </div>
                <div className="px-6 py-4">
                    <CreateEmployeeForm designations={designations} departments={departments} />
                </div>
            </div>
        </div>
    )
}
