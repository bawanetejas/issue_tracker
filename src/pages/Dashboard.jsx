import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className='flex h-screen overflow-hidden'>


            {/* Sidebar */}
            <div className="sticky top-0 h-screen">
                <Sidebar />
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>

        </div>

    )
}
