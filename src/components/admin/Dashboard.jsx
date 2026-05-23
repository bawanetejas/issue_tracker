import React from 'react'
import Navbar from '../common/Navbar'
import TransparentBtn from '../common/TransparentBtn'
import BlueBtn from '../common/BlueBtn'
import Card from "./Card"
import IssueTable from '../common/IssueTable'
import TeamsList from '../common/TeamsList'

export default function AdminDashboard() {
    const data = [
        {
            name: "Total Issues",
            topIcon: "format_list_bulleted",
            issues: 24,
            bottomIcon: 'trending_up',
            bottomText: "12% from last week"
        },
        {
            name: "Open",
            topIcon: "pending",
            issues: 12,
            bottomIcon: null,
            bottomText: "Requires attention",
            color: "text-tertiary"
        },
        {
            name: "Resolved",
            topIcon: "check_circle",
            issues: 10,
            bottomIcon: null,
            bottomText: "+4 today",
            color: "text-emerald-500"
        },

    ]

    const issueData = [
        {
            id: "ISS-1024",
            title: "Database latency on production cluster",
            status: "In Progress",
            priority: "High",
            assignedTo: "John Doe",
        },
        {
            id: "ISS-1025",
            title: "Sidebar navigation overlap on mobile",
            status: "Open",
            priority: "Medium",
            assignedTo: "Sarah K.",
        },
        {
            id: "ISS-1026",
            title: "Broken export to CSV functionality",
            status: "Resolved",
            priority: "Low",
            assignedTo: "Mike B.",
        },
    ];

    const teamsData = [
        {
            id: 1,
            name: "Engineering",
            members: 8,
        },
        {
            id: 2,
            name: "Design",
            members: 4,
        },
        {
            id: 3,
            name: "Product",
            members: 3,
        },
    ];

    return (
        <div className="flex-1 flex flex-col min-w-0 relative">
            {/* <!-- TopNavBar --> */}
            <div className='w-full sticky top-0 z-10'>
                <Navbar />
            </div>
            {/* <!-- Scrollable Body --> */}
            <main className="flex-1 overflow-y-auto p-lg custom-scrollbar">
                {/* <!-- Dashboard Header & Quick Actions --> */}
                <div
                    className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-xl"
                >
                    <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                            Admin Dashboard
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            System overview and management
                        </p>
                    </div>
                    <div className="flex items-center gap-md">
                        <TransparentBtn icon="group_add" name="Create Team" />

                        <BlueBtn icon="add_circle" name="Create Issue" />

                    </div>
                </div>
                {/* <!-- Bento Stats Grid --> */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-md mb-xl"
                >
                    {data.map((val, i) => {
                        return <Card key={i}
                            name={val.name}
                            topIcon={val.topIcon}
                            issue={val.issues}
                            bottomIcon={val.bottomIcon}
                            bottomText={val.bottomText}
                            color={val.color}
                        />
                    })}

                    <div
                        className="p-lg bg-surface-container-high border border-outline-variant rounded-lg flex flex-col gap-sm relative overflow-hidden group"
                    >
                        <div className="">
                            <span className="text-on-surface font-label-md">System Health</span>
                            <div className="mt-md">
                                <span className="font-headline-sm text-headline-sm text-on-surface"
                                >99.8%</span>
                                <div
                                    className="w-full bg-surface-container-lowest h-1.5 rounded-full mt-sm"
                                >
                                    <div
                                        className="bg-primary h-full w-[99.8%] rounded-full shadow-[0_0_8px_rgba(173,198,255,0.4)]"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity"
                        >
                            <span
                                className="material-symbols-outlined text-[80px]"
                                data-icon="bolt"
                            >bolt</span>
                        </div>
                    </div>
                </div>


                {/* <!-- Content Split Section --> */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
                    {/* <!-- Issues Table (Main Area) --> */}
                    <div
                        className="lg:col-span-8 bg-surface-container-low border border-outline-variant rounded-lg flex flex-col overflow-hidden"
                    >
                        <div className="overflow-x-auto">
                            <IssueTable issueData={issueData} />
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-lg">
                        {/* teams card */}
                        <TeamsList teams={teamsData} />

                        {/* <!-- Visual Insight Card --> */}
                        <div
                            className="relative bg-surface-container-high border border-outline-variant rounded-lg p-lg overflow-hidden min-h-[160px] flex flex-col justify-end"
                        >
                            <img
                                alt="Data Visualization"
                                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
                                data-alt="A professional high-density data analytics dashboard showing complex charts and lines against a dark navy blue and slate background. The atmosphere is sophisticated and high-tech, using glowing blue and amber accents to highlight key performance indicators. The lighting is low and focused, creating a serious and dependable corporate environment."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkrLMbBvlhRwpleqXokYd-3T8HHSYTudPsil6JAFKb_nUfF6Dl9je3NESuM2xcCI3fBL9cqmAjQJ_I4kxsTcj_Il94rSJJ9hyHjsedQbPeowDG6JfphKop5kENmbWsHDjP9sFyPd0EB96pgfcJx5FfhY5kWpUnp0ReQLi2B0M-zrGCw3x_Qiq9bbCfvJjEqrM5KBGKkXH6xqKo6inWkiJcKE33kj-Eyu-ykytMPPODP0X5_dQXzLfTXckmlswzuHF3EUVxf_Jp948"
                            />
                            <div className="relative z-10">
                                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                                    Performance Report
                                </h4>
                                <p className="font-body-md text-on-surface-variant mb-md">
                                    Download your weekly resolution summary.
                                </p>
                                <button
                                    className="px-md py-sm bg-on-surface text-surface rounded-full font-label-md hover:bg-surface-bright transition-colors active:scale-95 duration-150"
                                >
                                    Generate PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
