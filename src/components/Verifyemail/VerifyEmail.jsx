import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { verifyEmailFunc } from "../../api/user"
import {routeChanged} from '../../redux/topLoadingBar'

const VerifyEmail = () => {
    const { id, token } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    dispatch(routeChanged())
    const handleVerifyEmail = (e) => {
        e.preventDefault()
        let data = verifyEmailFunc(id, token)
        console.log(data);
        navigate('/login')
    }
    return (
        <div className="overflow-hidden h-screen w-full sm:container">
            <div className="w-full flex flex-col justify-center mt-52">
                <div className="bg-snow-drift-50 max-w-[400px] h-2/4 w-full mx-auto p-8 px-8 rounded-lg shadow-md shadow-heavy-metal-900">
                    <button className="ml-20 text-center  bg-heavy-metal-800 rounded-md shadow-lg py-2 px-3" onClick={handleVerifyEmail}>
                        <p className="text-white font-bold hover:shadow-lg shadow-heavy-metal-600 ">Verify Here</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail