import React, { useState } from 'react'
import CollapsibleSidebar from './Sidebar'
import Dashboard from '../../pages/Dashboard/Dashboard'
import ThemeSwitcher from '../ThemeSwitches'

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            {/* Fixed Navbar */}
            <div className="navbar bg-base-100 shadow-sm sticky top-0 p-0 z-1000">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    <ThemeSwitcher />
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <CollapsibleSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        </>
    )
}

export default Navbar
