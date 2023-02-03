import React from 'react'
import AdminCard from '../../../components/Admin/Card/AdminCard'
import LineChartComponent from '../../../components/Admin/HomeContents/BarChart';
import HomeHead from '../../../components/Admin/HomeContents/HomeHead';
import SideDivision from '../../../components/Admin/HomeContents/SideDivision';
import AdminLayout from '../../../components/Admin/Layout/AdminLayout';

const AdminHome = () => {

    return (
        <div className='w-full'>
            <AdminLayout>
                <AdminCard>
                    <div>
                        <HomeHead />
                    </div>
                    <div className='grid gap-2 w-full'>
                        <div className='md:flex grid gap-2 md:mx-4 -mt-6'>
                            <div className='w-full md:w-3/4 bg-snow-drift-50 shadow-sm overflow-x-scroll scrollbar-hide shadow-heavy-metal-700 rounded-md py-10 px-5 '>
                                <LineChartComponent />
                            </div>
                            <SideDivision />
                        </div>
                    </div>
                </AdminCard>
            </AdminLayout>
        </div>
    )
}

export default AdminHome