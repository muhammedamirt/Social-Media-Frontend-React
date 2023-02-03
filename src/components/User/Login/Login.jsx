import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { loginApi } from '../../../api/user'
import { routeChanged } from "../../../redux/topLoadingBar"
import { userAddDetails } from '../../../redux/authSliceUser'
import ParticlesBg from "../ParticlesBg/Particles"
import GoogleSignUp from "../Register/GoogleSignUp"
const Login = () => {
    const dispatch = useDispatch()
    dispatch(routeChanged())
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [checked, setChecked] = useState(false)
    const [emailValidate, setEmailValidate] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [authCommonMessage, setAuthCommonMessage] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        setEmailValidate(email.includes('@') && email.trim().length > 7)
        setPasswordValid(password.length > 7)
    }, [email, password])

    const handleLogin = async (e) => {
        e.preventDefault()
        if (emailValidate && passwordValid) {
            let data = await loginApi(email, password)
            if (data?.passwordError) {
                setPasswordError(true)
            } else if (data?.emailError) {
                setEmailError(true)
            } else if (data?.success) {
                localStorage.setItem('userToken', data?.token)
                localStorage.setItem('id', data?.id)
                dispatch(userAddDetails({ token: data?.token, id: data?.id }))
                navigate('/')
            }
        } else {
            setAuthCommonMessage('something wrong')
        }
    }

    const emailChange = (e) => {
        emailError && setEmailError(false)
        setEmail(e.target.value)
    }

    const passwordChange = (e) => {
        passwordError && setPasswordError(false)
        setPassword(e.target.value)
    }

    return (
        <div>
            <ParticlesBg />
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full px-2 md:px-0'>
                <div className="hidden sm:block py-52 px-20">
                    {/* <img className="w-full h-full object-cover" src="https://media.smallbiztrends.com/2021/01/Active-Social-Media-Presence.png" alt="Background" /> */}
                    <h1 className="text-white text-center text-6xl font-extrabold">Welcome...!</h1>
                    <p className="text-red-200 text-center">“If you’re looking for the next big thing, and you’re looking where everyone else is, you’re looking in the wrong place.”</p>
                </div>
                <div className=" flex flex-col justify-center">
                    <form className="bg-snow-drift-50 max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg shadow-md shadow-heavy-metal-900">
                        <h2 className="text-4xl text-heavy-metal-800 font-bold text-center">SIGN IN</h2>
                        {
                            <div className="flex flex-col text-heavy-metal-800 py-2 ">
                                <label>Email</label>

                                <input
                                    className={emailValidate ? "focus:outline-1 outline-green-600 rounded-lg bg-snow-drift-100 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-100  " : "focus:outline-1 outline-red-500 text-red-600 rounded-lg bg-snow-drift-200 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-50 "}
                                    type="email"
                                    value={email}
                                    onChange={emailChange}
                                />
                                {emailError ? <p className="text-sm text-red-600">Email not registered*</p> : <p hidden></p>}
                            </div>
                        }

                        {
                            <div className="flex flex-col text-heavy-metal-800 py-2 ">
                                <label>Password</label>
                                <input
                                    className={passwordValid ? "focus:outline-1 outline-green-600 rounded-lg bg-snow-drift-100 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-100  " : "focus:outline-1 outline-red-500 text-red-600 rounded-lg bg-snow-drift-200 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-50 "}
                                    type="password"
                                    value={password}
                                    onChange={passwordChange} />
                                {passwordError ? <p className="text-sm text-red-600">Wrong Password*</p> : <p hidden></p>}
                            </div>
                        }

                        <div className="flex justify-between py-2">
                            <p className="flex items-center text-xs"><input className="mr-2" type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />Remember Me</p>
                            <Link to='/forgotPassword'>
                                <p className="cursor-pointer hover:underline text-xs text-blue-800">Forgot password ?</p>
                            </Link>
                        </div>
                        <div className="flex justify-center py-2">
                            <Link to={'/register'}>
                                <p className=" text-sm text-heavy-metal-900">Register?<span className="text-blue-600 cursor-pointer hover:underline">Click Me</span></p>
                            </Link>
                        </div>
                        <div className="flex justify-center w-full">
                            <h4>------OR------</h4>
                        </div>
                        <div className="flex justify-center ">
                        <GoogleSignUp />
                        </div>
                        <p className="text-sm text-red-600">{authCommonMessage}</p>

                        <button type="button" disabled={emailValidate && passwordValid ? false : true} className="w-full my-5 py-3 border-white border-2 bg-heavy-metal-500 shadow-lg text-snow-drift-50 hover:shadow-heavy-metal-700  font-semibold rounded-lg" onClick={handleLogin}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
