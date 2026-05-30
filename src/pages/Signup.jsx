
import React from 'react'
import { Link } from "react-router-dom"

export default function Signup() {
    return (
        <div className="flex min-h-screen items-center justify-center p-md bg-surface-container-lowest">
            <main className="w-full max-w-[500px]">
                {/* <!-- Brand Header (Simulated Shell suppressed for transaction flow) --> */}
                <div className="mb-xl text-center">
                    <div className="inline-flex items-center justify-center mb-md">
                        <span className="material-symbols-outlined text-primary text-[32px]" data-icon="bug_report">bug_report</span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Sign Up</h1>
                    <p className="font-body-md text-body-md text-on-surface-variant">Create your developer account to start tracking issues.</p>
                </div>
                {/* <!-- Registration Card --> */}
                <section className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-lg shadow-2xl">
                    <form action="#" className="space-y-md" method="POST">
                        {/* <!-- Full Name Field --> */}
                        <div>
                            <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" for="fullName">Full Name</label>
                            <input className="w-full bg-[#0f172a] border border-[#1e293b] rounded text-on-surface font-body-md text-body-md p-md focus:border-primary focus:ring-0 input-glow transition-colors placeholder:text-[#94a3b8]" id="fullName" name="fullName" placeholder="John Doe" required="" type="text" />
                        </div>
                        {/* <!-- Username Field --> */}
                        <div>
                            <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" for="userName">Username</label>
                            <input className="w-full bg-[#0f172a] border border-[#1e293b] rounded text-on-surface font-body-md text-body-md p-md focus:border-primary focus:ring-0 input-glow transition-colors placeholder:text-[#94a3b8]" id="userName" name="userName" placeholder="johndoe_dev" required="" type="text" />
                        </div>
                        {/* <!-- Email Field --> */}
                        <div>
                            <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" for="email">Email Address</label>
                            <input className="w-full bg-[#0f172a] border border-[#1e293b] rounded text-on-surface font-body-md text-body-md p-md focus:border-primary focus:ring-0 input-glow transition-colors placeholder:text-[#94a3b8]" id="email" name="email" placeholder="name@company.com" required="" type="email" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                            {/* <!-- Password Field --> */}
                            <div>
                                <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" for="password">Password</label>
                                <input className="w-full bg-[#0f172a] border border-[#1e293b] rounded text-on-surface font-body-md text-body-md p-md focus:border-primary focus:ring-0 input-glow transition-colors placeholder:text-[#94a3b8]" id="password" name="password" placeholder="••••••••" required="" type="password" />
                            </div>
                            {/* <!-- Confirm Password Field --> */}
                            <div>
                                <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" for="confirmPassword">Confirm Password</label>
                                <input className="w-full bg-[#0f172a] border border-[#1e293b] rounded text-on-surface font-body-md text-body-md p-md focus:border-primary focus:ring-0 input-glow transition-colors placeholder:text-[#94a3b8]" id="confirmPassword" name="confirmPassword" placeholder="••••••••" required="" type="password" />
                            </div>
                        </div>
                        {/* <!-- Terms & Conditions (Implicit for Sign Up) --> */}
                        <div className="flex items-center gap-sm pt-xs">
                            <input className="w-4 h-4 rounded border-[#1e293b] bg-[#0f172a] text-primary focus:ring-offset-background" id="terms" name="terms" required="" type="checkbox" />
                            <label className="font-label-md text-label-md text-on-surface-variant" for="terms">
                                I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a>
                            </label>
                        </div>
                        {/* <!-- Primary Action --> */}
                        <button className="w-full bg-[#3b82f6] text-[#f1f5f9] font-label-md text-label-md h-11 flex items-center justify-center rounded transition-all hover:bg-[#2563eb] active:scale-[0.98] mt-lg" type="submit">
                            Sign Up
                        </button>
                    </form>
                    {/* <!-- Social/Alternative Divider --> */}
                    <div className="relative my-xl">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-[#1e293b]"></span>
                        </div>
                        <div className="relative flex justify-center text-label-sm">
                            <span className="bg-[#0f172a] px-md text-on-secondary-fixed-variant">OR CONTINUE WITH</span>
                        </div>
                    </div>
                    {/* <!-- Social Options --> */}
                    <div className="grid grid-cols-2 gap-sm">
                        <button className="flex items-center justify-center gap-sm py-sm border border-[#1e293b] rounded hover:bg-[#1e293b] transition-colors font-label-md text-label-md text-on-surface">
                            <span className="material-symbols-outlined text-body-lg" data-icon="terminal">terminal</span>
                            GitHub
                        </button>
                        <button className="flex items-center justify-center gap-sm py-sm border border-[#1e293b] rounded hover:bg-[#1e293b] transition-colors font-label-md text-label-md text-on-surface">
                            <span className="material-symbols-outlined text-body-lg" data-icon="cloud">cloud</span>
                            Google
                        </button>
                    </div>
                </section>
                {/* <!-- Footer Link --> */}
                <div className="mt-xl text-center">
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        Already have an account?
                        <Link className="text-primary font-medium hover:underline ml-xs" to="/login">Log in</Link>
                    </p>
                </div>
            </main>
            {/* <!-- Background Atmospheric Effect --> */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-tertiary-container/5 blur-[120px] rounded-full"></div>
            </div>

        </div>
    )
}
