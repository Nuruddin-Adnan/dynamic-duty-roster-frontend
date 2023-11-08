'use client'

import { authKey } from '@/constants/storageKey';
import { removeUserInfo } from '@/services/auth/auth.service';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai';



export default function Navbar() {
    const router = useRouter();

    const handleLogout = () => {
        removeUserInfo(authKey)
        router.push("/");
    };


    return (
        <div className="bg-white text-black p-4 shadow-md flex justify-between items-center">

            <div className="text-xl font-semibold">Department of Neuropathology</div>

            <div className='flex'>
                <Link href='/dashboard/generate-roster' className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-5 rounded mr-10">
                    Generate Roster
                </Link>
                <button onClick={handleLogout} className="border border-gray-300 hover:shadow-lg text-red-500 font-bold text-center rounded-full w-10 h-10 grid place-items-center">
                    <AiOutlinePoweroff />
                </button>
            </div>
        </div>
    )
}
