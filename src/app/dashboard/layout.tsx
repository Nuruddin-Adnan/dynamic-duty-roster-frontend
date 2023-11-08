'use client'

import LoadingComponent from "@/components/Loading";
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { useAppSelector } from "@/redux/hook";
import { getAccessToken, isLoggedIn } from "@/services/auth/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type AuthState = {
    user: any | null;
    accessToken: string | null;
};

export default function DashbaordLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const userLoggedIn = isLoggedIn();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!userLoggedIn) {
            router.push("/auth/login");
        }
        setIsLoading(true);
    }, [userLoggedIn, router, isLoading]);

    if (!isLoading) {
        return (
            <LoadingComponent />
        );
    }

    console.log(getAccessToken());

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
