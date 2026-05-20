import React from 'react'

export default function TeamsList({ teams }) {
    return (
        <div
            className="bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden"
        >
            <div
                className="p-lg border-b border-outline-variant flex justify-between items-center"
            >
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Teams
                </h3>
                <span
                    className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-on-surface"
                    data-icon="more_vert"
                >more_vert</span>
            </div>

            <div className="p-md flex flex-col gap-sm">
                {teams.map((val, i) => (
                    <div
                        className="flex items-center justify-between p-md bg-surface-container border border-outline-variant rounded-lg hover:border-primary transition-all group"
                    >
                        <div className="flex items-center gap-md">
                            <div
                                className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-500"
                            >
                                <span>{val.name[0]}</span>
                            </div>
                            <div>
                                <p className="text-body-md font-bold text-on-surface">
                                    {val.name}
                                </p>
                                <p className="text-label-sm text-on-surface-variant">
                                    {val.members} members
                                </p>
                            </div>
                        </div>
                        <span
                            className="material-symbols-outlined text-outline opacity-0 group-hover:opacity-100 transition-opacity"
                            data-icon="chevron_right"
                        >chevron_right</span>
                    </div>
                ))

                }
            </div>


            <div className="p-md pt-0">
                <button
                    className="w-full py-sm text-label-md font-bold text-primary hover:bg-primary/10 rounded-lg transition-colors uppercase tracking-widest"
                >
                    Manage Teams
                </button>
            </div>
        </div>
    )
}
