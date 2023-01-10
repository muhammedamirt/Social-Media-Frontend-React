import { Card } from "../Card/Card"

const SearchResults = () => {
    const Active = "font-bold border-b-2 border-heavy-metal-900 border-opacity-30 bg-snow-drift-400 py-1 px-2 rounded-t-lg cursor-pointer"
    const inActive = "font-bold border-b-2 border-heavy-metal-900 border-opacity-30 hover:bg-snow-drift-200 py-1 px-2 hover:border-none rounded-t-lg cursor-pointer"
    return (
        <div>
            <Card>
                <div className="sm:px-10">
                    <div className="flex justify-between text-sm md:text-md md:px-16 py-2 border-heavy-metal-900">
                        <p className={Active}>Users</p>
                        <p className={inActive}>Posts</p>
                        <p className={inActive}>Tags</p>
                        <p className={inActive}>Location</p>
                    </div>
                </div>
                <div className="px-5">
                    <div className="border-b p-4 -mx-4 border-b-heavy-metal-300">
                        <div className="flex gap-3">
                            <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Crystal</h3>
                                <h4 className="text-sm leading-3">Username</h4>
                            </div>
                        </div>
                    </div>
                    <div className="border-b p-4 -mx-4 border-b-heavy-metal-300">
                        <div className="flex gap-3">
                            <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Crystal</h3>
                                <h4 className="text-sm leading-3">Username</h4>
                            </div>
                        </div>
                    </div>
                    <div className="border-b p-4 -mx-4 border-b-heavy-metal-300">
                        <div className="flex gap-3">
                            <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Crystal</h3>
                                <h4 className="text-sm leading-3">Username</h4>
                            </div>
                        </div>
                    </div>
                    <div className="border-b p-4 -mx-4 border-b-heavy-metal-300">
                        <div className="flex gap-3">
                            <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Crystal</h3>
                                <h4 className="text-sm leading-3">Username</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SearchResults
