import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function layout({
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
                    {/* dashbord content */}
                    {children}
                </div>
            </div>
        </main>
    )
}
