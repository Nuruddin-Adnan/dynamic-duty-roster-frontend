"use client";

import Link from "next/link";

export default function error() {
    return (
        <div className="text-center h-screen flex flex-col justify-center">
            <h1 className="text-6xl">500 Server Error</h1>
            <Link href='/' className="text-center text-xl">Back to home</Link>
        </div>
    );
}