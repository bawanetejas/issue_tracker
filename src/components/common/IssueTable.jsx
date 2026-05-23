import React from 'react'
import IssueRow from '../admin/IssueRow'

export default function IssueTable({ issueData }) {
    return (

        <div>
            <div
                className="p-lg border-b border-outline-variant flex justify-between items-center"
            >
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Recent Issues
                </h3>
                <button className="text-primary font-label-md hover:underline">
                    View All
                </button>
            </div>

            <table className="w-full text-left">
                <thead className="bg-surface-container text-on-surface-variant">
                    <tr>
                        <th
                            className="px-lg py-md font-label-md uppercase tracking-wider"
                        >
                            Title
                        </th>
                        <th
                            className="px-lg py-md font-label-md uppercase tracking-wider"
                        >
                            Status
                        </th>
                        <th
                            className="px-lg py-md font-label-md uppercase tracking-wider"
                        >
                            Priority
                        </th>
                        <th
                            className="px-lg py-md font-label-md uppercase tracking-wider"
                        >
                            Assigned To
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                    {
                        issueData.map((val, i) => (
                            <IssueRow
                                id={val.id}
                                title={val.title}
                                status={val.status}
                                priority={val.priority}
                                assignedTo={val.assignedTo} />
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}
