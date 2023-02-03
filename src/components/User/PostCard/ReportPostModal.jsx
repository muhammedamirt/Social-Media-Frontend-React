import { Alert, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { reportPostAPI } from '../../../api/postReq'
import CloseIcon from '@mui/icons-material/Close';

const ReportPostModal = ({ postId, reportStatus, setReportStatus }) => {
    const userId = localStorage.getItem('id')
    const [reportReason, setReportReason] = useState('')
    const [selectError, setSelectError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const handleReport = async () => {
        if (reportReason !== '') {
            setLoading(true)
            const data = {
                reason: reportReason,
                userId,
                postId
            }
            const response = await reportPostAPI(data)
            if (response.status) {
                setLoading(false)
                setSuccess(true)
                setTimeout(() => setReportStatus(), 1000)
            }
        } else {
            setSelectError(true)
        }
    }
    const handelSelectChange = (e) => {
        setSelectError(false)
        setReportReason(e.target.value)
    }
    // const handleClose = ()=>{
    //     console.log('hhhh');
    //     setReportStatus(!reportStatus)
    // }
    return (
        <div >
            <div className="fixed mx-5  justify-center items-center rounded-lg  flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative w-auto mx-auto max-w-xl  w-76">
                    {/* content */}
                    <div className=" md:w-96 w-64 py-10  border-2 rounded-lg shadow-lg relative flex flex-col  bg-snow-drift-50 outline-none focus:outline-none">
                        <button onClick={()=>setReportStatus(false)} className='px-5 flex justify-end'>
                            <p>
                                <CloseIcon />
                            </p>
                        </button>
                        <div> 
                            <p className='text-center mt-2 font-semibold mx-4'>
                                You can report this post here, select a reason and submit
                            </p>
                        </div>
                        <div className='flex justify-center mt-5 w-full '>
                            <select onChange={handelSelectChange} className='w-full mx-3 py-2 px-2 rounded-md outline-none' placeholder='select reason'>
                                <option className='text-sm'>Select</option>
                                <option className='text-sm' value="I just don't like it">I just don't like it</option>
                                <option className='text-sm' value="It's Spam">It's Spam</option>
                                <option className='text-sm' value="Violence">Violence</option>
                                <option className='text-sm' value="Nudity or sexual activity">Nudity or sexual activity</option>
                                <option className='text-sm' value="Celebrity insulting">Celebrity insulting</option>
                            </select>
                        </div>
                        {selectError &&
                            <div className='mx-5 my-1'>
                                <Alert severity="error">please select a reason!</Alert>
                            </div>
                        }
                        {success &&
                            <div className='mx-5 my-1'>
                                <Alert severity="success">Successfully completed!</Alert>
                                <div className='flex justify-center w-full'>
                                    <CircularProgress />
                                </div>
                            </div>
                        }
                        {!success && <div className='flex justify-center mt-2 '>
                            {loading ? <CircularProgress /> :
                                <button onClick={handleReport} className='bg-heavy-metal-800 py-1 px-3 rounded-lg text-white hover:shadow-md shadow-gray-600'>
                                    Report
                                </button>}
                        </div>}
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </div>
    )
}

export default ReportPostModal