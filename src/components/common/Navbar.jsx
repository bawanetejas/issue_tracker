import React from 'react'

export default function Navbar() {
    return (
        <header
            class="bg-surface-container-low border-b border-outline-variant flex justify-between items-center w-full px-lg h-16 shrink-0"
        >
            <div class="flex items-center gap-lg flex-1">
                <div class="relative w-full max-w-md">
                    <span
                        class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                        data-icon="search"
                    >search</span>
                    <input
                        class="w-full bg-surface-container border border-outline-variant rounded-full pl-10 pr-4 py-2 text-body-md focus:outline-none focus:border-primary transition-colors"
                        placeholder="Search issues, teams, or members..."
                        type="text"
                    />
                </div>
            </div>
            <div class="flex items-center gap-md">
                <button
                    class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80"
                >
                    <span
                        class="material-symbols-outlined text-on-surface-variant"
                        data-icon="notifications"
                    >notifications</span>
                </button>
                <button
                    class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80"
                >
                    <span
                        class="material-symbols-outlined text-on-surface-variant"
                        data-icon="help">
                        help
                    </span>
                </button>
                <div class="h-8 w-[1px] bg-outline-variant mx-xs"></div>
                <div
                    class="flex items-center gap-sm cursor-pointer hover:bg-surface-container-high p-xs pr-sm rounded-full transition-colors active:opacity-80"
                >
                    <img
                        alt="User profile"
                        class="w-8 h-8 rounded-full border border-outline-variant"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Mq2XrWSkPSbf81WOMlX6mYoYw8z7vj4VL2b--sIY4t34yloesfGlwk3lDkx0ltKt0KnbYCaY67aOangklgnwqUO0YOec0nmVgdiR1byAtcouhmXH4g-1_ylVjSpMRF6Bwnd-rXTu6mpI9CxeJAdGqAqqogQOb9smnvx2YLNLJzzsqE2AtsbKVcJwNrTqd3bw5AmzvzUgJpWXEwkYaMvVWCMzuxyLQT3zElpKr26rqkGiw30GsHaoWnfILsa_3XmOr7DFOJS6XDk"
                    />
                    <span
                        class="font-label-md text-label-md text-on-surface hidden lg:block"
                    >Alex Rivera</span>
                </div>
            </div>
        </header>
    )
}
