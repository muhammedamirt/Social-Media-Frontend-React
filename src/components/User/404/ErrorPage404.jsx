import React from 'react'
import { Card } from '../Card/Card'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const ErrorPage404 = () => {
    return (
        <div>
            <div className='min-h-[90vh] mx-5 my-5'>
                <Card>
                    <div className='min-h-[80vh] mx-5 my-5 flex justify-center items-center'>
                        <div>
                            <div className='w-60'>
                                <img src="https://res.cloudinary.com/dvh94pdmb/image/upload/v1675688033/A-404-Page-Best-Practices-and-Design-Inspiration_vb4muq.jpg" alt="404" />
                            </div>
                            <div>
                                <p className='text-xl text-center mt-5 text-heavy-metal-800'>
                                    <span className='font-bold mr-1'>
                                        404
                                    </span>
                                    Page not found
                                </p>
                            </div>
                            <div className='flex justify-center'>
                                <Link to={-1}>
                                <button className='hover:bg-heavy-metal-800 text-heavy-metal-800 hover:text-snow-drift-100 border-2 border-heavy-metal-800  py-1 mt-2 px-7 rounded-xl transition '>
                                    <div className='flex gap-1 '>
                                        <div>
                                            <ArrowBackIcon />
                                        </div>
                                        <p className=''>Go Back</p>
                                    </div>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default ErrorPage404