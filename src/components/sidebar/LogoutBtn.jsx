import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function LogoutBtn() {
    const navigate = useNavigate();
    function logout() {
        console.log("logging out")
        localStorage.removeItem("user", '')
        localStorage.removeItem("token", '')
        toast.success("Logged out successfully")
        navigate("/login")
    }
    return (
        <button onClick={logout}
            className="flex items-center gap-md p-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-lg active:scale-95 duration-150 transition-all"

        >
            <span className="material-symbols-outlined" data-icon="logout"
            >logout</span>
            <span className="font-label-md text-label-md">Logout</span>
        </button>
    )
}
