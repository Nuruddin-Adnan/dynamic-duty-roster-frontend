'use client'

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { useSession } from "next-auth/react"

export default function DashbaordLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="bg-gray-100 h-screen">
            <Sidebar />
            <div className="ml-64">
                <Navbar />
                <div className="p-4">
                    {children}
                </div>
            </div>
        </main>
    )
}
