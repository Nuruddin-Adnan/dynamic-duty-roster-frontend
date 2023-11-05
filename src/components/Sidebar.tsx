'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { AiOutlineDashboard, AiOutlineBranches } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { GiRank3 } from 'react-icons/gi';
import { SiWorkplace } from 'react-icons/si';

export default function Sidebar() {
    const pathname = usePathname()
    return (
        <div className="bg-blue-700 text-white h-screen w-64 fixed top-0 left-0">
            <div className="p-4">

                <div className="text-2xl font-semibold mb-4">Duty Roster</div>

                <ul className="space-y-4">
                    <li>
                        <Link href="/dashboard" className={`link flex items-center py-2 px-4 hover:bg-blue-600 ${pathname === '/dashboard' ? 'active' : ''}`}>
                            <span className="mr-2"><AiOutlineDashboard /></span>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/employee" className={`link flex items-center py-2 px-4 hover:bg-blue-600 ${pathname === '/dashboard/employee' ? 'active' : ''}`}>
                            <span className="mr-2"><BsPeople /></span>
                            Employee
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/department" className={`link flex items-center py-2 px-4 hover:bg-blue-600 ${pathname === '/dashboard/department' ? 'active' : ''}`}>
                            <span className="mr-2"><AiOutlineBranches /></span>
                            Deparatment
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/designation" className={`link flex items-center py-2 px-4 hover:bg-blue-600 ${pathname === '/dashboard/designation' ? 'active' : ''}`}>
                            <span className="mr-2"><GiRank3 /></span>
                            Designation
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/workstation" className={`link flex items-center py-2 px-4 hover:bg-blue-600 ${pathname === '/dashboard/workstation' ? 'active' : ''}`}>
                            <span className="mr-2"><SiWorkplace /></span>
                            Workstation
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}
