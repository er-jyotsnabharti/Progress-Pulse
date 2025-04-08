import React, { useRef, useEffect } from 'react'

function Sidebar({ open, setOpen }) {
    const sidebarRef = useRef(null)

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [setOpen])

    return (
        <div
            ref={sidebarRef}
            className={`fixed top-16 left-0 bg-base-200 transition-all duration-300 ease-in-out z-10 min-h-[calc(100vh-4rem)] ${
                open ? 'w-64' : 'w-18'
            }`}>
            <ul className="menu p-2 space-y-2">
                <li>
                    <button className="btn btn-ghost justify-start" onClick={() => setOpen(!open)}>
                        {/* Hamburger icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {open && <span className="ml-2">Menu</span>}
                    </button>
                </li>
                <li>
                    <a className="btn btn-ghost justify-start">
                        <span className="text-lg">🏠</span>
                        {open && <span className="ml-2">Home</span>}
                    </a>
                </li>
                <li>
                    <a className="btn btn-ghost justify-start">
                        <span className="text-lg">⚙️</span>
                        {open && <span className="ml-2">Settings</span>}
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
