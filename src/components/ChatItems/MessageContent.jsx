import React from 'react'

const MessageContent = () => {
    return (
        <div className='h-96 border-2 bg-white px-5 relative'>
            <div className='flex gap-3 mt-3'>
                <div className='w-10 h-10 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer'>
                    <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                </div>
                <div>
                    <div className='py-2 rounded-lg inline-block rounded-bl-none px-3 bg-snow-drift-200 max-w-xl'>
                        <p>
                            hello....!
                        </p>
                    </div>
                    <p className='text-xs text-blue-600 text-end font-thin'>9:00pm</p>
                </div>
            </div>
            <div className='flex gap-3 mt-3 justify-end'>
                <div>
                    <div className='py-2 rounded-lg inline-block rounded-br-none px-3 bg-snow-drift-100 max-w-xl'>
                        <p>
                            Hi Chris,how are you!
                        </p>
                    </div>
                    <p className='text-xs text-blue-600 text-end font-thin'>9:02pm</p>
                </div>
                <div className='w-10 h-10 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer'>
                    <img src="https://wallpaperaccess.com/full/2213424.jpg" alt="avatars" />
                </div>
            </div>
            <div className='absolute inset-x-0 bottom-0 py-2 px-2'>
                <div className='flex gap-2'>
                    <div className='w-5/6 border-2 rounded-l-2xl px-4 py-2 '>
                        <input className='w-full outline-none border-b-2 border-l-2 px-2' placeholder='Text message...' type="text" />
                    </div>
                    <div className='w-1/6'>
                        <button className='bg-heavy-metal-800 text-white px-5 py-3 rounded-r-2xl'>
                            send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageContent