/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { verifyEmailFunc } from "../../../api/user"
import {routeChanged} from '../../../redux/topLoadingBar'

const VerifyEmail = () => {
    const { id, token } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    dispatch(routeChanged())
    const handleVerifyEmail =async (e) => {
        e.preventDefault()
        let data =await verifyEmailFunc(id, token)
        navigate('/login')
    }
    return (
        <div className="overflow-hidden py-40 w-full md:px-10">
            <div className="w-full flex flex-col justify-center">
                <div className="bg-snow-drift-50 max-w-[400px] h-2/4 w-full mx-auto p-8 px-8 rounded-lg shadow-md shadow-heavy-metal-900">
                    <h1 className="text-center font-bold text-2xl text-heavy-metal-700">Click Here To Verify Your Email</h1>
                    <div className="flex justify-center mt-5">
                    <button className="group text-center border-2 border-heavy-metal-800 hover:bg-heavy-metal-800 rounded-md shadow-lg py-2 px-3" onClick={handleVerifyEmail}>
                        <p className=" group-hover:text-white   font-bold hover:shadow-lg shadow-heavy-metal-600 ">Verify Here</p>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail