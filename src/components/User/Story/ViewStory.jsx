import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const ViewStory = ({ visible, onClose }) => {

    return (
        <>
            {visible ? (
                <>
                    <div className="fixed justify-center items-center rounded-lg  flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none ">
                        <div className="relative w-auto mx-auto max-w-xl h-96 w-76">
                            {/* content */}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-snow-drift-200 outline-none focus:outline-none">
                                {/* header */}
                                <div className="flex items-center border p-5  border-b border-solid  bg-heavy-metal-900 rounded-t">
                                    <h3 className="">
                                        {/* {value} */}
                                        <div className='flex gap-2'>
                                            <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-orange-600 shadow-sm shadow-gray-500 '>
                                                <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                                            </div>
                                            <div>
                                                <div>
                                                    <h4 className='text-lg font-semibold text-snow-drift-100'>username</h4>
                                                    <p className='text-xs text-snow-drift-100'>9:00 pm</p>
                                                </div>
                                            </div>
                                        </div>
                                    </h3>
                                    <button
                                        type="button"
                                        className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={onClose}
                                    >
                                        <span className="bg-transparent text-snow-drift-100  h-6 w-6 text block outline-none focus:outline-none">
                                            <CloseIcon />
                                        </span>
                                    </button>
                                </div>
                                {/* body */}
                                <div className='border w-96 h-96 py-1 px-3'>
                                    <div className='flex justify-center border w-full h-full'>
                                        <img className='' src="https://images.hdqwalls.com/walls/thumb/milford-sound-new-zealand-a0.jpg" alt="story" />
                                    </div>
                                </div>
                                {/* footer */}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                </>
            ) : null}
        </>
    )
}

export default ViewStory