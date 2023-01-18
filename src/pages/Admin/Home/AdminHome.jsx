import React from 'react'
import AdminCard from '../../../components/Admin/Card/AdminCard'
import AriaBarChart from '../../../components/Admin/HomeContents/Aria&BarChart';
import LineChartComponent from '../../../components/Admin/HomeContents/BarChart';
import HomeHead from '../../../components/Admin/HomeContents/HomeHead';
import SideDivision from '../../../components/Admin/HomeContents/SideDivision';
import AdminLayout from '../../../components/Admin/Layout/AdminLayout';

const AdminHome = () => {

    return (
        <div className='w-full'>
            <AdminLayout>
                <AdminCard>
                    <HomeHead />
                    <div className='grid gap-2'>
                        <div className='md:flex grid gap-2 md:mx-4 -mt-6'>
                            <div className='w-full md:w-3/4 bg-snow-drift-50 shadow-sm shadow-heavy-metal-700 rounded-md py-10 px-5 '>
                                <LineChartComponent />
                            </div>
                            <SideDivision />
                        </div>
                        <div className='md:flex grid gap-2 md:mx-4 '>
                            <div className='w-full md:w-3/4 bg-snow-drift-50 shadow-sm shadow-heavy-metal-700 rounded-md py-10 px-5 '>
                                <AriaBarChart />
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