import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoutBtn from './LogoutBtn';

export default function Sidebar() {
    const currentRoute = useLocation();

    function checkRoute(route) {
        return currentRoute.pathname === route
    }

    return (
        <div
            className="hidden md:flex flex-col h-screen w-64 bg-surface-container-low border-r border-outline-variant p-md gap-sm shrink-0"
        >
            <div className="flex items-center gap-md mb-xl">
                <div
                    className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center"
                >
                    <span
                        className="material-symbols-outlined text-on-primary-container"
                        data-icon="track_changes"
                    >track_changes</span>
                </div>
                <div>
                    <h1 className="font-headline-sm text-headline-sm font-bold text-primary">
                        TrackFlow
                    </h1>
                    <p className="font-label-md text-label-md text-on-surface-variant">
                        Internal Utility
                    </p>
                </div>
            </div>
            <nav className="flex flex-col gap-xs flex-1">
                <Link to="/dashboard"
                    className={`flex items-center gap-md p-md ${checkRoute("/dashboard") ? "bg-secondary-container" : "hover:bg-surface-container-highest"} text-on-secondary-container rounded-lg active:scale-95 duration-150 transition-all`}
                >
                    <span className="material-symbols-outlined" data-icon="dashboard"
                    >dashboard</span>
                    <span className="font-label-md text-label-md">Dashboard</span>
                </Link>
                <Link to="/teams"
                    className={`flex items-center gap-md p-md ${checkRoute("/teams") ? "bg-secondary-container" : "hover:bg-surface-container-highest"} text-on-secondary-container rounded-lg active:scale-95 duration-150 transition-all`}

                >
                    <span className="material-symbols-outlined" data-icon="group">group</span>
                    <span className="font-label-md text-label-md">Teams</span>
                </Link>
                <Link to="/issues"
                    className={`flex items-center gap-md p-md ${checkRoute("/issues") ? "bg-secondary-container" : "hover:bg-surface-container-highest"} text-on-secondary-container rounded-lg active:scale-95 duration-150 transition-all`}

                >
                    <span className="material-symbols-outlined" data-icon="bug_report"
                    >bug_report</span>
                    <span className="font-label-md text-label-md">Issues</span>
                </Link>
            </nav>
            <div
                className="mt-auto flex flex-col gap-xs pt-md border-t border-outline-variant"
            >
                <button
                    className="flex items-center gap-md w-full bg-primary text-on-primary font-bold py-md px-lg rounded-lg hover:bg-primary/90 transition-colors mb-md active:scale-95 duration-150"
                >
                    <span className="material-symbols-outlined" data-icon="add">add</span>
                    <span className="font-label-md text-label-md">Create Issue</span>
                </button>
                <a
                    className="flex items-center gap-md p-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-lg active:scale-95 duration-150 transition-all"

                >
                    <span className="material-symbols-outlined" data-icon="settings"
                    >settings</span>
                    <span className="font-label-md text-label-md">Settings</span>
                </a>

                <LogoutBtn />

            </div>
        </div>
    )
}
