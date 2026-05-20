import React from 'react'

export default function IssueRow({ id, title, status, priority, assignedTo }) {

    return (
        <tr
            className="hover:bg-surface-container-high transition-colors cursor-pointer group"
        >
            <td className="px-lg py-md">
                <div className="flex flex-col">
                    <span className="text-body-md font-medium text-on-surface"
                    >{title}</span>
                    <span className="text-label-sm text-on-surface-variant">
                        {id}
                    </span>
                </div>
            </td>
            <td className="px-lg py-md">
                <span
                    className="px-sm py-1 rounded-full bg-tertiary/10 text-tertiary text-label-sm font-bold border border-tertiary/20"
                >{status}</span>
            </td>
            <td className="px-lg py-md">
                <span
                    className="px-sm py-1 rounded-full bg-error/10 text-error text-label-sm font-bold border border-error/20"
                >{priority}</span>
            </td>
            <td className="px-lg py-md">
                <div className="flex items-center gap-sm">
                    <span
                        alt="Assignee"
                        className="w-6 h-6 rounded-full border border-outline-variant"

                    >{assignedTo[0]}</span>
                    <span className="text-body-md text-on-surface"
                    >{assignedTo}</span>
                </div>
            </td>
        </tr>
    )
}
