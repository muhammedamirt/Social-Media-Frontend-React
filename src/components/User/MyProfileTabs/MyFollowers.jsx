import { Card } from "../Card/Card"
import { useSelector } from 'react-redux'

const MyFollowers = () => {
    const userData = useSelector((state) => state.userData.userData)
    return (
        <div>
            <div>
                <Card>
                    <div>
                        <h2 className="font-bold text-xl mb-4">Followers</h2>
                    </div>
                    <div>
                        <div className="border-b p-4 -mx-4 border-b-heavy-metal-300 flex justify-between">
                            <div className="flex gap-3">
                                <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                    <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Crystal</h3>
                                    <h4 className="text-sm leading-3">Username</h4>
                                </div>
                            </div>
                            <button className="text-heavy-metal-800 px-6 rounded-xl font-bold text-md border-heavy-metal-800 border-4 hover:bg-heavy-metal-800 hover:text-snow-drift-50">
                                Remove
                            </button>
                        </div>
                        <div className="border-b p-4 -mx-4 border-b-heavy-metal-300 flex justify-between">
                            <div className="flex gap-3">
                                <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                    <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Crystal</h3>
                                    <h4 className="text-sm leading-3">Username</h4>
                                </div>
                            </div>
                            <button className="text-heavy-metal-800 px-6 rounded-xl font-bold text-md border-heavy-metal-800 border-4 hover:bg-heavy-metal-800 hover:text-snow-drift-50">
                                Remove
                            </button>
                        </div>
                        <div className="border-b p-4 -mx-4 border-b-heavy-metal-300 flex justify-between">
                            <div className="flex gap-3">
                                <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                    <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Crystal</h3>
                                    <h4 className="text-sm leading-3">Username</h4>
                                </div>
                            </div>
                            <button className="text-heavy-metal-800 px-6 rounded-xl font-bold text-md border-heavy-metal-800 border-4 hover:bg-heavy-metal-800 hover:text-snow-drift-50">
                                Remove
                            </button>
                        </div>
                        <div className="border-b p-4 -mx-4 border-b-heavy-metal-300 flex justify-between">
                            <div className="flex gap-3">
                                <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                    <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Crystal</h3>
                                    <h4 className="text-sm leading-3">Username</h4>
                                </div>
                            </div>
                            <button className="text-heavy-metal-800 px-6 rounded-xl font-bold text-md border-heavy-metal-800 border-4 hover:bg-heavy-metal-800 hover:text-snow-drift-50">
                                Remove
                            </button>
                        </div>
                        <div className="border-b p-4 -mx-4 border-b-heavy-metal-300 flex justify-between">
                            <div className="flex gap-3">
                                <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                    <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Crystal</h3>
                                    <h4 className="text-sm leading-3">Username</h4>
                                </div>
                            </div>
                            <button className="text-heavy-metal-800 px-6 rounded-xl font-bold text-md border-heavy-metal-800 border-4 hover:bg-heavy-metal-800 hover:text-snow-drift-50">
                                Remove
                            </button>
                        </div>
                        <div className="border-b p-4 -mx-4 border-b-heavy-metal-300 flex justify-between">
                            <div className="flex gap-3">
                                <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                    <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Crystal</h3>
                                    <h4 className="text-sm leading-3">Username</h4>
                                </div>
                            </div>
                            <button className="text-heavy-metal-800 px-6 rounded-xl font-bold text-md border-heavy-metal-800 border-4 hover:bg-heavy-metal-800 hover:text-snow-drift-50">
                                Remove
                            </button>
                        </div>
                        <div className="border-b p-4 -mx-4 border-b-heavy-metal-300 flex justify-between">
                            <div className="flex gap-3">
                                <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                    <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Crystal</h3>
                                    <h4 className="text-sm leading-3">Username</h4>
                                </div>
                            </div>
                            <button className="text-heavy-metal-800 px-6 rounded-xl font-bold text-md border-heavy-metal-800 border-4 hover:bg-heavy-metal-800 hover:text-snow-drift-50">
                                Remove
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default MyFollowers