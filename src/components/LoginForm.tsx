'use client'
import { adminLogin } from '@/services/admin/admin.servic';
import { setAccessToken } from '@/services/auth/auth.service';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function LoginForm() {
    const router = useRouter();
    async function action(formData: FormData) {

        if (formData.get('emial') === '') {
            alert('Please enter the user name');
            return false
        }

        const FormDataObject = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        }

        try {
            const result = await adminLogin(FormDataObject)
            if (!result.success) {
                alert('something went wrong');
                return false;
            }

            const accessToken = result.data.accessToken;
            setAccessToken(accessToken as string)//token set to sessionStorage

            router.push('/dashboard');

        } catch (e) {
            return { message: 'Failed to create' }
        }
    }
    return (
        <form action={action}>
            <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">User Name</div>
                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500" type="text" placeholder="mike@gmail.com" name='email' />
            </div>
            <div className="mt-8">
                <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                        Password
                    </div>
                    <div>
                        <Link href='' className="text-xs font-display font-semibold text-blue-600 hover:text-blue-800
                    cursor-pointer">
                            Forgot Password?
                        </Link>
                    </div>
                </div>
                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500" type="password" placeholder="Enter your password" name='password' />
            </div>
            <div className="mt-10">
                <button type="submit" className="bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide
            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600
            shadow-lg">
                    Log In
                </button>
            </div>
        </form>
    )
}
