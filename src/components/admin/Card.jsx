import React from 'react'

export default function Card({ name = null, topIcon = null, issue = null, bottomIcon = null, bottomText = null, color = null }) {
    return (
        <div
            className="p-lg bg-surface-container-low border border-outline-variant rounded-lg flex flex-col gap-sm"
        >
            <div className="flex justify-between items-start">
                <span
                    className="text-on-surface-variant font-label-md uppercase tracking-wider"
                >{name}</span>
                <div className="p-xs bg-primary/10 rounded-full">
                    <span
                        className={`material-symbols-outlined ${color !== null ? color : "text-primary"}  text-[20px]`}
                        data-icon="format_list_bulleted"
                    >{topIcon}</span>
                </div>
            </div>
            <div className="mt-auto">
                <span className={`font-headline-lg text-headline-lg ${color !== null ? color : "text-primary"} `}
                >{issue}</span>
                <p
                    className={`text-label-sm ${color !== null ? color : "text-primary"}  flex items-center gap-xs mt-1`}
                >
                    <span
                        className={`material-symbols-outlined ${color !== null ? color : "text-primary"}  text-[14px]`}
                        data-icon="trending_up"
                    >{bottomIcon}</span>
                    <span>{bottomText}</span>
                </p>
            </div>
        </div>
    )
}
