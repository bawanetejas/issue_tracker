import React from 'react'

export default function Sidebar() {
    return (
        <div
            class="hidden md:flex flex-col h-screen w-64 bg-surface-container-low border-r border-outline-variant p-md gap-sm shrink-0"
        >
            <div class="flex items-center gap-md mb-xl">
                <div
                    class="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center"
                >
                    <span
                        class="material-symbols-outlined text-on-primary-container"
                        data-icon="track_changes"
                    >track_changes</span>
                </div>
                <div>
                    <h1 class="font-headline-sm text-headline-sm font-bold text-primary">
                        TrackFlow
                    </h1>
                    <p class="font-label-md text-label-md text-on-surface-variant">
                        Internal Utility
                    </p>
                </div>
            </div>
            <nav class="flex flex-col gap-xs flex-1">
                <a
                    class="flex items-center gap-md p-md bg-secondary-container text-on-secondary-container rounded-lg active:scale-95 duration-150 transition-all"
                    href="#"
                >
                    <span class="material-symbols-outlined" data-icon="dashboard"
                    >dashboard</span>
                    <span class="font-label-md text-label-md">Dashboard</span>
                </a>
                <a
                    class="flex items-center gap-md p-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-lg active:scale-95 duration-150 transition-all"
                    href="#"
                >
                    <span class="material-symbols-outlined" data-icon="group">group</span>
                    <span class="font-label-md text-label-md">Teams</span>
                </a>
                <a
                    class="flex items-center gap-md p-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-lg active:scale-95 duration-150 transition-all"
                    href="#"
                >
                    <span class="material-symbols-outlined" data-icon="bug_report"
                    >bug_report</span>
                    <span class="font-label-md text-label-md">Issues</span>
                </a>
            </nav>
            <div
                class="mt-auto flex flex-col gap-xs pt-md border-t border-outline-variant"
            >
                <button
                    class="flex items-center gap-md w-full bg-primary text-on-primary font-bold py-md px-lg rounded-lg hover:bg-primary/90 transition-colors mb-md active:scale-95 duration-150"
                >
                    <span class="material-symbols-outlined" data-icon="add">add</span>
                    <span class="font-label-md text-label-md">Create Issue</span>
                </button>
                <a
                    class="flex items-center gap-md p-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-lg active:scale-95 duration-150 transition-all"
                    href="#"
                >
                    <span class="material-symbols-outlined" data-icon="settings"
                    >settings</span>
                    <span class="font-label-md text-label-md">Settings</span>
                </a>
                <a
                    class="flex items-center gap-md p-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-lg active:scale-95 duration-150 transition-all"
                    href="#"
                >
                    <span class="material-symbols-outlined" data-icon="logout"
                    >logout</span>
                    <span class="font-label-md text-label-md">Logout</span>
                </a>
            </div>
        </div>
    )
}
