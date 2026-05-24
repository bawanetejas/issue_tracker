import React from 'react'
import IssueTable from '../common/IssueTable'

export default function Issues() {
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
    return (
        <div className='w-full'>
            <IssueTable issueData={issueData} />
        </div>
    )
}
