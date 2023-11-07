import React from 'react'

export default function LoadingComponent() {
    return (
        <div className="min-h-screen w-screen top-0 left-0 fixed flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Loading...</h1>
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            </div>
        </div>
    )
}
