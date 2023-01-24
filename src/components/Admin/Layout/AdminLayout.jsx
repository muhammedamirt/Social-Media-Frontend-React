import React from 'react'
import AdminHeader from '../Header/AdminHeader'
import AdminSideBar from '../NavigationBar/AdminSideBar'

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminHeader />
      <div className="md:flex md:max-w-6xl mt-4 mx-auto gap-6">
        <div className="fixed md:static w-full bottom-0 mx-4 md:w-3/12 -mb-5 -ml-0 pt-5 z-40">
          <AdminSideBar />
        </div>
        <div className="md:mx-0 mx-2 md:w-8/12">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout