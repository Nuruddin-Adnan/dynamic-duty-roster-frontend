import Link from "next/link";

export default async function Dashboard() {
    return (
        <div>
            <Link href='/dashboard/generate-roster' className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-5 rounded mr-10">Genarate Roster</Link>
        </div>
    )
}
