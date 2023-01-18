import React from 'react'

const ViewStory = ({ visible, onClose }) => {

    return (
        <>
            {visible ? (
                <>
                    <div className="fixed justify-center items-center  flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none ">
                        <div className="relative w-auto mx-auto max-w-xl h-96 w-76">
                            {/* content */}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-snow-drift-200 outline-none focus:outline-none">
                                {/* header */}
                                <div className="flex items-center border p-5 text-center border-b border-solid  bg-heavy-metal-900 rounded-t">
                                    <h3 className="text-3xl text-main justify-items-center font-semibold">
                                        {/* {value} */}ddd
                                    </h3>
                                    <button
                                        type="button"
                                        className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={onClose}
                                    >
                                        <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 justify-self-end"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
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