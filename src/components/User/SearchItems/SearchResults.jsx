import { Link } from "react-router-dom"
import { Card } from "../Card/Card"

const SearchResults = ({ searchResults }) => {
    const Active = "font-bold border-b-2 border-heavy-metal-900 border-opacity-30 bg-snow-drift-400 py-1 px-2 rounded-t-lg cursor-pointer"
    const inActive = "font-bold border-b-2 border-heavy-metal-900 border-opacity-30 hover:bg-snow-drift-200 py-1 px-2 hover:border-none rounded-t-lg cursor-pointer"
    return (
        <div>
            <Card>
                <div className="sm:px-10">
                    <div className="flex justify-center text-sm md:text-md md:px-16 py-2 border-heavy-metal-900">
                        <p className={Active}>Users</p>
                        {/* <p className={inActive}>Posts</p>
                        <p className={inActive}>Tags</p>
                        <p className={inActive}>Location</p> */}
                    </div>
                </div>
                <div className="px-5">
                    {searchResults.length !== 0 ?
                        searchResults.map((result) => {
                            return (
                                <div className="border-b p-4 -mx-4 border-b-heavy-metal-300 hover:bg-heavy-metal-200">
                                    <Link to={`/profile/${result?._id}`}>
                                        <div className="flex gap-3">
                                            <div className='w-12 h-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                                <img src={result?.picture} alt="avatars" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{result?.username}</h3>
                                                <h4 className="text-sm leading-3">{result?.first_name} {result?.last_name}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                        :
                        <div>
                            <div className="py-10 flex justify-center">
                               <p className="font-bold text-heavy-metal-800">No User Found</p>
                            </div>
                        </div>}
                </div>
            </Card>
        </div>
    )
}

export default SearchResults
