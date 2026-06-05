
import React, { useState } from 'react'
import { loginSchema } from '../schema/auth.schema';
import { login } from '../services/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [loginData, setLoginData] = useState({ email: '', password: '' })
    const navigate = useNavigate();
    function onInputChange(e) {
        setLoginData((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }))
    }

    async function formHandler(e) {
        e.preventDefault();
        const result = loginSchema.safeParse(loginData)
        if (!result.success) {
            toast.error(`Add proper ${result?.error.issues[0].path[0]}`)
            return
        }
        try {
            const data = await login(loginData, navigate)
            localStorage.setItem("user", JSON.stringify(result.data.data.existingUser))
            localStorage.setItem("token", JSON.stringify(result.data.data.token))
            toast.success("Login successfull")
            navigate("/dashboard")
        } catch (error) {
            toast.error("Not able to login")
        }


    }
    return (
        <div className="min-h-screen flex items-center justify-center p-md">
            {/* <!-- Login Container --> */}
            <main className="w-full max-w-[420px] animate-in fade-in zoom-in duration-500">
                {/* <!-- Brand Identity / Header --> */}
                <div className="text-center mb-xl">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant mb-md">
                        <span className="material-symbols-outlined text-primary text-2xl" >bug_report</span>
                    </div>
                    <h1 className="font-headline-md text-headline-md text-on-surface mb-xs">Issue Tracker</h1>
                    <p className="font-body-md text-body-md text-on-surface-variant">Sign in to manage your workspace</p>
                </div>
                {/* <!-- Centralized Card --> */}
                <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg p-lg shadow-2xl">
                    <form className="space-y-lg" id="loginForm" onSubmit={formHandler}>
                        {/* <!-- Email Field --> */}
                        <div className="space-y-base">
                            <label className="font-label-md text-label-md text-on-surface-variant block ml-xs"
                                htmlFor="email">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-on-surface-variant text-[18px]">mail</span>
                                </div>
                                <input className="w-full bg-[#0f172a] border border-[#1e293b] text-[#f1f5f9] placeholder-[#94a3b8] rounded-lg py-md pl-[44px] pr-md font-body-md text-body-md input-focus-ring transition-all"
                                    id="email"
                                    placeholder="name@company.com"
                                    required
                                    type="email"
                                    name="email"
                                    value={loginData.email}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        {/* <!-- Password Field --> */}
                        <div className="space-y-base">
                            <div className="flex justify-between items-center ml-xs">
                                <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="password">Password</label>
                                <a className="font-label-md text-label-md text-primary hover:underline decoration-primary/30" href="#">Forgot?</a>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-on-surface-variant text-[18px]">lock</span>
                                </div>
                                <input className="w-full bg-[#0f172a] border border-[#1e293b] text-[#f1f5f9] placeholder-[#94a3b8] rounded-lg py-md pl-[44px] pr-md font-body-md text-body-md input-focus-ring transition-all"
                                    id="password"
                                    placeholder="••••••••"
                                    required
                                    name='password'
                                    value={loginData.password}
                                    onChange={onInputChange}
                                    type="password" />
                            </div>
                        </div>
                        {/* <!-- Action Button --> */}
                        <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-[#f1f5f9] font-label-md text-label-md py-md rounded-lg transition-colors active:scale-[0.98] duration-150 flex items-center justify-center gap-sm"
                            type="submit">
                            Sign In
                            <span className="material-symbols-outlined text-[16px]">login</span>
                        </button>
                    </form>
                    {/* <!-- Divider --> */}
                    <div className="relative my-xl">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#1e293b]"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="px-md bg-[#0f172a] text-[#94a3b8] font-label-sm text-label-sm">OR CONTINUE WITH</span>
                        </div>
                    </div>
                    {/* <!-- SSO Button --> */}
                    <button className="w-full bg-transparent border border-[#1e293b] hover:bg-[#1e293b] text-[#94a3b8] font-label-md text-label-md py-md rounded-lg transition-all flex items-center justify-center gap-sm group">
                        <span className="material-symbols-outlined group-hover:text-primary transition-colors text-[18px]">account_tree</span>
                        SSO Identity Provider
                    </button>
                </div>
                {/* <!-- Footer / Secondary Action --> */}
                <div className="mt-lg text-center">
                    <p className="font-body-md text-body-md text-[#94a3b8]">
                        Don't have an account?
                        <Link to={"/signup"} className="text-[#f1f5f9] font-medium hover:text-primary transition-colors underline decoration-[#1e293b] underline-offset-4" >Create an account</Link>
                    </p>
                </div>
                {/* <!-- System Status Indicator (Utilitarian detail) --> */}
                <div className="mt-xl flex items-center justify-center gap-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-label-sm text-label-sm text-[#424754]">All systems operational</span>
                </div>
            </main>

        </div>
    )
}
