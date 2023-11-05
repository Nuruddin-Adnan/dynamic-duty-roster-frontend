import React from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai';

export default function Navbar() {
    return (
        <div className="bg-white text-black p-4 shadow-md flex justify-between items-center">

            <div className="text-xl font-semibold">Department of Neuropathology</div>

            <div className='flex'>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-5 rounded mr-10">
                    Genarate Roster
                </button>
                <button className="border border-gray-300 hover:shadow-lg text-red-500 font-bold text-center rounded-full w-10 h-10 grid place-items-center">
                    <AiOutlinePoweroff />
                </button>
            </div>
        </div>
    )
}
