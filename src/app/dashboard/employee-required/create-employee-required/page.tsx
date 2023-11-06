import { designationService } from '@/services/designation/designation.service';
import CreateEmployeeRequiredForm from '../components/CreateEmployeeRequiredForm';
import { workstationService } from '@/services/workstation/workstation.service';

export default async function CreateEmployeeRequiredPage() {
    const designationsData = designationService.getAllDesignations();
    const workstationData = workstationService.getAllWorkstations();

    // Wait for the promises to resolve
    const [{ data: designations }, { data: workstations }] = await Promise.all([designationsData, workstationData])

    return (
        <div className="container mx-auto">
            <div className="rounded overflow-hidden shadow-lg max-w-lg">
                <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
                    <span className='text-gray-700 font-bold text-xl'>Employee Required Create</span>
                </div>
                <div className="px-6 py-4">
                    <CreateEmployeeRequiredForm designations={designations} workstations={workstations} />
                </div>
            </div>
        </div>
    )
}
