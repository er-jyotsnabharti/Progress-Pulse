import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Dashboard/Navbar/Navbar'
import Footer from '../components/Homepage/Footer'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { useState } from 'react';

const DashboardLayout = () => {
  const isOtpPage = location.pathname === "/otp";
  if (!isOtpPage) {
    localStorage.setItem('allowOtp', false);
  }
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isAuthenticated = true // or: localStorage.getItem('token')

  return (
    <>
      <Navbar />
      {isAuthenticated ? (
        <div className="flex h-[calc(100vh-4rem)]">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <main className="flex-1 transition-all duration-300 mt-1 p-4 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
      <Footer />
    </>


  )
}

export default DashboardLayout


// Use in Div of Outleft if you want the content to be sliding When sidebar slides in and out
// className={`transition-all duration-300 mt-1 p-4 h-[calc(100vh-4rem)] overflow-y-auto ${sidebarOpen ? 'ml-64' : 'ml-16' }`}
// className={`mt-1 p-4 h-[calc(100vh-4rem)] ml-20` for the content to be fixed when sidebar slides in and out