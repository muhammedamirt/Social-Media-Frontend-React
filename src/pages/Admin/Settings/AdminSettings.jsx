import React from 'react'
import AdminCard from '../../../components/Admin/Card/AdminCard'
import AdminLayout from '../../../components/Admin/Layout/AdminLayout'
import AdminSettingsContent from '../../../components/Admin/Settings/AdminSettings'

const AdminSettings = () => {
    return (
        <div>
            <AdminLayout >
            <h2 className="hidden md:block text-2xl underline mb-4 text-heavy-metal-500 opacity-40">Settings</h2>
                <div>
                   <AdminSettingsContent />
                </div>
            </AdminLayout>
        </div>
    )
}

export default AdminSettings