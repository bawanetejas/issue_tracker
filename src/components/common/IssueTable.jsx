import React from 'react'
import IssueRow from '../admin/IssueRow'

export default function IssueTable({ issueData }) {
    return (
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
    )
}
