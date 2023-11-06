'use client'

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function DashbaordLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="bg-gray-100 min-h-screen">
            <Sidebar />
            <div className="ml-64">
                <div className="sticky top-0">
                    <Navbar />
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </main>
    )
}
