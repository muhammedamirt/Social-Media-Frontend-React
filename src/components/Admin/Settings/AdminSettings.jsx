import React from 'react'
import AdminCard from '../Card/AdminCard'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';

const AdminSettingsContent = () => {
    const navigate = useNavigate()
    const submit = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to logout.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        localStorage.clear()
                        navigate('/admin/login')
                    }
                },
                {
                    label: 'Cancel',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    };
    const handleAdminLogout = () => {
        console.log('handleAdminLogout')
        submit()
    }
    return (
        <div>
            <AdminCard>
                <div className="px-4">
                    <div className="grid gap-5">
                        <div className="flex gap-4">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>
                            </span>
                            <p className="font-bold hover:underline cursor-pointer">Security</p>
                        </div>
                        <div className="flex gap-4">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                            </span>
                            <p className="font-bold hover:underline cursor-pointer">About</p>
                        </div>
                        <div className="flex gap-4">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            </span>
                            <p className="font-bold hover:underline cursor-pointer">Theme</p>
                        </div>

                        <div className="flex gap-4">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                            </span>
                            <div onClick={handleAdminLogout}>
                                <p className="font-bold hover:underline cursor-pointer text-blue-500">Log Out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminCard>
        </div>
    )
}

export default AdminSettingsContent