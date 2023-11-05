import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Dynamic Duty Roster</h1>
          <p className="mt-2 text-lg">Effortlessly manage your team&apos;s schedule</p>
        </div>
      </header>
      <section className="container mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="p-4 bg-gray-100 rounded-lg">
            <div className="text-2xl text-blue-600 mb-2">Easy Scheduling</div>
            <p>Effortlessly create and manage duty rosters for your team. Save time and reduce errors.</p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg">
            <div className="text-2xl text-blue-600 mb-2">Real-Time Updates</div>
            <p>Keep everyone on the same page with real-time updates and notifications.</p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg">
            <div className="text-2xl text-blue-600 mb-2">Customization</div>
            <p>Customize duty rosters to fit your team&apos;s unique needs. Add shifts, roles, and more.</p>
          </li>
          <li className="p-4 bg-gray-100 rounded-lg">
            <div className="text-2xl text-blue-600 mb-2">Mobile-Friendly</div>
            <p>Access and manage your duty roster on the go with our mobile-friendly app.</p>
          </li>
        </ul>
      </section>
      <section className="container mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Get Started Today</h2>
        <p className="mb-4 text-center">Sign up now and experience the power of our dynamic duty roster application.</p>
        <div className="flex justify-center">
          <Link href="/dashboard" className="bg-blue-600 text-white py-3 px-6 rounded-full text-xl hover:bg-blue-700 hover:shadow-md transition duration-300 ease-in-out">Generate Duty Roster</Link>
        </div>
      </section>
      <footer className="text-center text-gray-600 mt-8">
        &copy; 2023 Dynamic Duty Roster App. All rights reserved.
      </footer>
    </>
  )
}
